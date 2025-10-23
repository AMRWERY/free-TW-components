import {
  collection,
  getDocs,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "@/firebase";

export const useComponentsStore = defineStore("componentsStore", () => {
  const componentsData = ref<any[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const searchQuery = ref("");
  const activeCategory = ref("");
  const currentPage = ref(1);
  const itemsPerPage = ref(10);

  // Fetch components from Firestore
  const fetchComponents = async () => {
    loading.value = true;
    error.value = null;
    try {
      const querySnapshot = await getDocs(collection(db, "components"));
      const fetchedData: any[] = [];
      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        fetchedData.push({
          id: docSnap.id,
          title: data.title || data.name,
          name: data.name,
          category: data.category || "Uncategorized",
          route: data.route,
          code: data.code,
          copy_count: data.copy_count || 0,
          created_at: data.created_at,
          description: data.description || "", // Optional for search
        });
      });
      componentsData.value = fetchedData;
    } catch (err: any) {
      error.value = err.message;
      console.error("Error fetching components:", err);
    } finally {
      loading.value = false;
    }
  };

  // Return a component by route (string)
  const getComponentByRoute = (routeParam: string | undefined) => {
    if (!routeParam) return undefined;
    return componentsData.value.find((c) => c.route === String(routeParam));
  };

  // Increment copy_count safely in Firestore
  const incrementCopyCount = async (componentId: string) => {
    try {
      if (!componentId) return;
      const docRef = doc(db, "components", componentId);
      await updateDoc(docRef, { copy_count: increment(1) });
      const idx = componentsData.value.findIndex((c) => c.id === componentId);
      if (idx !== -1)
        componentsData.value[idx].copy_count =
          (componentsData.value[idx].copy_count || 0) + 1;
    } catch (err) {
      console.error("Failed to increment copy count:", err);
    }
  };

  // Organize by category
  const categories = computed(() => {
    const grouped: Record<string, any[]> = {};
    componentsData.value.forEach((component) => {
      const category = component.category || "Uncategorized";
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(component);
    });
    return Object.keys(grouped).map((name) => ({
      name,
      items: grouped[name],
    }));
  });

  // Filtered categories based on searchQuery and activeCategory
  const filteredCategories = computed(() => {
    let result = categories.value;
    // Filter by active category (show all if activeCategory is '')
    if (activeCategory.value) {
      result = result.filter(
        (category) => category.name === activeCategory.value
      );
    }
    // Filter by search query
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter((category) => {
        const items = category.items ?? [];
        const categoryNameLower = category.name.toLowerCase();
        if (categoryNameLower.includes(query)) {
          return true;
        }
        return items.some(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            (item.description && item.description.toLowerCase().includes(query))
        );
      });
    }
    return result.filter((category) => getDisplayItems(category).length > 0);
  });

  // Get display items for a category
  const getDisplayItems = (category: {
    name: string;
    items?: { title: string; route: string; description?: string }[];
  }) => {
    const items = category.items ?? [];
    if (!searchQuery.value) return items;
    const query = searchQuery.value.toLowerCase();
    const categoryNameLower = category.name.toLowerCase();
    if (categoryNameLower.includes(query)) {
      return items;
    }
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query))
    );
  };

  // --- NEW PAGINATION LOGIC ---

  // All components that match the current filters (search, active category)
  const allFilteredComponents = computed(() => {
    if (!activeCategory.value) {
      // If no active category, flatten all filtered categories
      return filteredCategories.value.flatMap((category) =>
        getDisplayItems(category)
      );
    } else {
      // If an active category, find it and return its filtered items
      const selectedCategory = filteredCategories.value.find(
        (cat) => cat.name === activeCategory.value
      );
      return selectedCategory ? getDisplayItems(selectedCategory) : [];
    }
  });

  const totalPages = computed(() => {
    return Math.ceil(allFilteredComponents.value.length / itemsPerPage.value);
  });

  const paginatedComponents = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return allFilteredComponents.value.slice(startIndex, endIndex);
  });

  // Total components count for "All Components" tab (if needed, this might be simplified now)
  const totalComponents = computed(() => {
    return componentsData.value.length; // All components before filtering
  });

  return {
    componentsData,
    loading,
    error,
    fetchComponents,
    getComponentByRoute,
    incrementCopyCount,
    categories,
    searchQuery,
    activeCategory,
    filteredCategories,
    getDisplayItems,
    totalComponents,
    currentPage,
    itemsPerPage,
    totalPages,
    paginatedComponents,

    // Pagination methods
    displayedItemsCount: computed(() => allFilteredComponents.value.length),

    // Pagination methods
    nextPage: () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    },
    prevPage: () => {
      if (currentPage.value > 1) currentPage.value--;
    },
    goToPage: (page: number) => {
      if (page >= 1 && page <= totalPages.value) currentPage.value = page;
    },
    resetPagination: () => {
      currentPage.value = 1;
    },
  };
});
