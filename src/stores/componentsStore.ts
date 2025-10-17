import { defineStore } from "pinia";
import { ref, computed } from "vue";
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

  // Total components count for "All Components" tab
  const totalComponents = computed(() => {
    return categories.value.reduce(
      (sum, category) => sum + (category.items?.length || 0),
      0
    );
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
  };
});
