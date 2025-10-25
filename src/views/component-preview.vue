<template>
    <div>
        <div class="p-8 bg-[#0a0a0f] min-h-screen">
            <div class="mb-4">
                <button @click="goBack"
                    class="flex items-center px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
            </div>
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
            <div v-if="showPreview" class="rounded-md shadow-sm overflow-hidden">
                <iframe :key="component?.id" ref="previewFrame"
                    class="w-full border-0 rounded-md bg-white p-4 min-h-[800px]" @load="loadPreview"></iframe>
            </div>

            <!-- Copy Code Section -->
            <div v-if="showCode" class="mt-4 p-4 border rounded-md bg-gray-100 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-lg font-semibold">{{ component?.title || component?.name }}</h3>
                    <button @click="handleCopy" :disabled="copied"
                        class="px-3 py-1 rounded-md text-sm font-medium text-white" :class="{
                            'bg-green-500 hover:bg-green-600': copied,
                            'bg-blue-500 hover:bg-blue-600': !copied,
                        }">
                        <span class="flex items-center justify-center gap-2 p-1" v-if="copied">
                            Copied
                            <img src="/svg/check-icon.svg" alt="check-icon" class="w-4 h-4" />
                        </span>
                        <span class="flex items-center justify-center gap-2 p-1" v-else>
                            Copy
                            <img src="/svg/copy-icon.svg" alt="copy-icon" class="w-4 h-4" />
                        </span>
                    </button>
                </div>
                <div class="relative bg-gray-800 text-white p-4 rounded-md overflow-auto max-w-6xl">
                    <pre class="text-sm"><code class="language-html">{{ component?.code }}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const componentStore = useComponentsStore();

const showPreview = ref(true);
const showCode = ref(false);
const copied = ref(false);
const previewFrame = ref<HTMLIFrameElement | null>(null);

const component = computed(() => componentStore.getComponentByRoute(route.params.route as string));

const loadPreview = () => {
    if (!previewFrame.value || !component.value?.code) return;

    const iframe = previewFrame.value;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) return;

    iframeDoc.open();
    iframeDoc.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script>
                (function() {
                  const originalConsoleWarn = console.warn;
                  console.warn = function(...args) {
                    if (args[0]?.includes?.('cdn.tailwindcss.com should not be used in production')) {
                    return;
                     }
                  originalConsoleWarn.apply(console, args);
                  };
               })();
            <\/script>
            <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,container-queries"><\/script>
            <style>
                body { margin: 0; padding: 0; }
            </style>
        </head>
        <body>
            ${component.value.code}
        </body>
        </html>
    `);
    iframeDoc.close();
};

// Watch component changes
watch(component, async () => {
    if (component.value && showPreview.value) {
        await nextTick();
        loadPreview();
    }
});

// Watch route changes
watch(() => route.params.route, async () => {
    if (showPreview.value) {
        await nextTick();
        loadPreview();
    }
});

// Watch showPreview toggle
watch(showPreview, async (newValue) => {
    if (newValue && component.value) {
        await nextTick();
        loadPreview();
    }
});

onMounted(async () => {
    if (!componentStore.componentsData.length) {
        await componentStore.fetchComponents();
    }
    await nextTick();
    if (showPreview.value) {
        loadPreview();
    }
});

const handleCopy = async () => {
    if (!component.value) return;
    try {
        await navigator.clipboard.writeText(component.value.code);
        copied.value = true;
        setTimeout(() => (copied.value = false), 1800);
        await componentStore.incrementCopyCount(component.value.id);
        await componentStore.fetchComponents();
    } catch (err) {
        console.error("Copy failed:", err);
    }
};

const goBack = () => {
    const category = component.value?.category || "Uncategorized";
    router.push({
        path: `/`,
        hash: `#${category.replace(/\s+/g, '-')}`,
    });
};
</script>