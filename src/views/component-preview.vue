<template>
    <div>
        <div class="p-8 bg-[#0a0a0f] min-h-screen">
            <div class="flex justify-end gap-2 mb-4">
                <button @click="showPreview = true; showCode = false"
                    class="p-2 rounded-md transition-colors duration-200" :class="{
                        'bg-indigo-500 text-white': showPreview,
                        'bg-gray-200 text-gray-700 hover:bg-gray-300': !showPreview,
                    }" aria-label="Show Component Preview">
                    <img src="/svg/eye-icon.svg" alt="eye-icon" class="h-6 w-6" />
                </button>

                <button @click="showCode = true; showPreview = false"
                    class="p-2 rounded-md transition-colors duration-200" :class="{
                        'bg-indigo-500 text-white': showCode,
                        'bg-gray-200 text-gray-700 hover:bg-gray-300': !showCode,
                    }" aria-label="Show Component Code">
                    <img src="/svg/code-icon.svg" alt="code-icon" class="h-6 w-6" />
                </button>
            </div>

            <!-- Component Preview Section -->
            <div v-if="showPreview" class="rounded-md shadow-sm overflow-hidden bg-white p-4">
                <div v-html="component?.code"></div>
            </div>

            <!-- Copy Code Section -->
            <div v-if="showCode" class="mt-4 p-4 border rounded-md bg-gray-100 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-lg font-semibold">{{ component?.title || component?.name }}</h3>
                    <button @click="handleCopy" :disabled="copied" class="px-3 py-1 rounded-md text-sm font-medium"
                        :class="{
                            'bg-green-500 hover:bg-green-600': copied,
                            'bg-blue-500 hover:bg-blue-600': !copied,
                        }">
                        <span class="flex items-center gap-1" v-if="copied">
                            Copied
                            <img src="/svg/check-icon.svg" alt="check-icon" class="w-4 h-4" />
                        </span>
                        <span class="flex items-center gap-1" v-else>
                            Copy
                            <img src="/svg/copy-icon.svg" alt="copy-icon" class="w-4 h-4" />
                        </span>
                    </button>
                </div>
                <div class="relative bg-gray-800 text-white p-4 rounded-md overflow-auto">
                    <pre><code class="language-html">{{ component?.code }}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useComponentsStore } from "@/stores/componentsStore";

const route = useRoute();
const store = useComponentsStore();

const showPreview = ref(true);
const showCode = ref(false);
const copied = ref(false);

// computed reference to the component from the store
const component = computed(() => store.getComponentByRoute(route.params.route as string));

onMounted(async () => {
    // fetch only if store is empty
    if (!store.componentsData.length) {
        await store.fetchComponents();
    }
});

// Copy handler (store handles Firestore increment)
const handleCopy = async () => {
    if (!component.value) return;
    try {
        await navigator.clipboard.writeText(component.value.code);
        copied.value = true;
        setTimeout(() => (copied.value = false), 1800);

        // increment via store (store performs Firestore update)
        await store.incrementCopyCount(component.value.id);
    } catch (err) {
        // keep errors out of the component; you can show UI if you want
        console.error("Copy failed:", err);
    }
};
</script>