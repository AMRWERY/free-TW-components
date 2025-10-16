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
          title: data.title || data.name, // normalized title
          name: data.name,
          category: data.category || "Uncategorized",
          route: data.route,
          code: data.code,
          copy_count: data.copy_count || 0,
          created_at: data.created_at,
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
      // update local cache if exists
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

  return {
    componentsData,
    loading,
    error,
    fetchComponents,
    getComponentByRoute,
    incrementCopyCount,
    categories,
  };
});
