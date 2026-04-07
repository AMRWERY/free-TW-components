<template>
    <div class="min-h-screen bg-[#0a0a0f]">
        <!-- Sticky Breadcrumb Bar -->
        <div class="sticky top-0 z-20 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-gray-800/50 px-4 sm:px-6 py-3">
            <div class="flex items-center justify-between gap-3 flex-wrap">
                <!-- Left: Back + Breadcrumb -->
                <div class="flex items-center gap-3 min-w-0">
                    <button @click="goBack"
                        class="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-400 bg-gray-800/60 hover:bg-cyan-500/10 hover:text-cyan-400 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-200 flex-shrink-0">
                        <svg class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>
                    <!-- Breadcrumb -->
                    <div class="hidden sm:flex items-center gap-1.5 text-sm min-w-0">
                        <span class="text-gray-500 hover:text-gray-300 cursor-pointer transition-colors"
                            @click="goBack">Home</span>
                        <svg class="w-3 h-3 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                        <span
                            class="text-gray-500 capitalize truncate cursor-pointer hover:text-gray-300 transition-colors max-w-[120px]"
                            @click="goBack">{{ component?.category }}</span>
                        <svg class="w-3 h-3 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="text-cyan-400 truncate font-medium max-w-[200px]">{{ component?.title }}</span>
                    </div>
                </div>
                <!-- Right: Copy count -->
                <div v-if="component" class="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                    <svg class="w-3.5 h-3.5 text-cyan-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {{ component.copy_count || 0 }} copies
                </div>
            </div>
        </div>

        <!-- Loading skeleton when fetching -->
        <div v-if="componentStore.loading" class="p-6 animate-pulse space-y-4">
            <div class="h-7 bg-gray-800 rounded-lg w-1/3"></div>
            <div class="h-4 bg-gray-800 rounded w-1/2"></div>
            <div class="flex gap-2 mt-2">
                <div class="h-6 bg-gray-800 rounded-full w-24"></div>
                <div class="h-6 bg-gray-800 rounded-full w-20"></div>
            </div>
            <div class="mt-6 h-[600px] bg-gray-800/50 rounded-xl"></div>
        </div>

        <!-- Not found state -->
        <div v-else-if="!component && !componentStore.loading"
            class="flex flex-col items-center justify-center py-32 px-6 text-center">
            <div
                class="w-16 h-16 rounded-2xl bg-gray-800/60 border border-gray-700/50 flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h2 class="text-xl font-bold text-white mb-2">Component not found</h2>
            <p class="text-gray-500 text-sm mb-6">The component you're looking for doesn't exist.</p>
            <button @click="goBack"
                class="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all text-sm font-medium">
                Go back home
            </button>
        </div>

        <!-- Main Content -->
        <div v-else class="p-4 sm:p-6">
            <!-- Component Header -->
            <div class="mb-5" v-if="component">
                <h1 class="text-xl sm:text-2xl font-bold text-white mb-1.5">{{ component.title }}</h1>
                <p v-if="component.description" class="text-sm text-gray-400 mb-3 max-w-2xl leading-relaxed">{{
                    component.description }}</p>
                <div class="flex items-center flex-wrap gap-2">
                    <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 capitalize">
                        {{ component.category }}
                    </span>
                    <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Tailwind CSS
                    </span>
                    <span
                        class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        {{ component.copy_count || 0 }} copies
                    </span>
                </div>
            </div>

            <!-- Toolbar: Width Presets + Preview/Code Toggle -->
            <div class="flex items-center justify-between gap-3 mb-3 flex-wrap">
                <!-- Width Presets -->
                <div class="flex gap-1.5 flex-wrap">
                    <button v-for="wp in widthPresets" :key="wp.label" @click="setPreviewWidth(wp.value)"
                        class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                        :class="previewWidth === wp.value
                            ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/40 shadow-sm'
                            : 'bg-gray-800/60 text-gray-400 border border-gray-700/50 hover:text-gray-200 hover:bg-gray-700/50'">
                        <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="wp.icon" />
                        </svg>
                        <span class="hidden sm:inline">{{ wp.label }}</span>
                    </button>
                </div>

                <!-- Preview / Code Toggle -->
                <div class="flex items-center bg-gray-800/60 border border-gray-700/50 rounded-lg p-0.5">
                    <button @click="showPreview = true; showCode = false"
                        class="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200"
                        :class="showPreview ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Preview
                    </button>
                    <button @click="showCode = true; showPreview = false"
                        class="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200"
                        :class="showCode ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Code
                    </button>
                </div>
            </div>

            <!-- Width Display -->
            <div v-if="showPreview && containerWidth" class="mb-2 flex justify-center">
                <span class="text-xs text-gray-600 font-mono bg-gray-800/50 px-2.5 py-0.5 rounded-full border border-gray-700/40">
                    {{ Math.round(containerWidth) }}px
                </span>
            </div>

            <!-- Preview Section -->
            <div v-if="showPreview"
                class="flex justify-center rounded-xl border border-gray-800/60 bg-[#0d0d14] overflow-hidden">
                <div ref="resizableContainer" class="relative overflow-hidden transition-all duration-300 ease-in-out"
                    :style="{ width: previewWidth ? `${previewWidth}px` : '100%', maxWidth: '100%' }">
                    <iframe :key="component?.id" ref="previewFrame"
                        class="w-full border-0 bg-white min-h-[600px]" @load="loadPreview"></iframe>
                </div>
            </div>

            <!-- Code Section -->
            <div v-if="showCode" class="relative">
                <div
                    class="absolute -inset-px bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 rounded-2xl blur-sm">
                </div>
                <div class="relative rounded-2xl bg-[#0d1117] border border-gray-800/80 overflow-hidden shadow-2xl">
                    <!-- Code header bar -->
                    <div
                        class="flex items-center justify-between px-5 py-3 bg-[#161b22] border-b border-gray-800/60">
                        <div class="flex items-center gap-2">
                            <div
                                class="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-default">
                            </div>
                            <div
                                class="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-default">
                            </div>
                            <div
                                class="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors cursor-default">
                            </div>
                            <span class="ml-2 text-xs font-mono text-gray-600">index.html</span>
                        </div>
                        <span
                            class="absolute left-1/2 -translate-x-1/2 text-xs font-mono text-gray-500 hidden sm:block truncate max-w-[200px]">
                            {{ component?.title || component?.name }}
                        </span>
                        <button @click="handleCopy" :disabled="copied"
                            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex-shrink-0"
                            :class="copied
                                ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                                : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40'">
                            <svg v-if="copied" class="w-3.5 h-3.5" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <svg v-else class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            {{ copied ? 'Copied!' : 'Copy Code' }}
                        </button>
                    </div>
                    <!-- Code body -->
                    <div class="overflow-auto max-h-[70vh] p-5 sm:p-6">
                        <pre
                            class="text-sm font-mono text-gray-300 leading-relaxed whitespace-pre-wrap break-words"><code>{{ component?.code }}</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useResizeObserver } from '@vueuse/core'

const route = useRoute();
const router = useRouter();
const componentStore = useComponentsStore();

const showPreview = ref(true);
const showCode = ref(false);
const copied = ref(false);
const previewFrame = ref<HTMLIFrameElement | null>(null);
const resizableContainer = ref<HTMLDivElement | null>(null);
const previewWidth = ref<number | null>(null);
const containerWidth = ref(0);

const widthPresets = [
    {
        label: 'Mobile',
        value: 375,
        icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
    },
    {
        label: 'Tablet',
        value: 768,
        icon: 'M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
    },
    {
        label: 'Desktop',
        value: 1280,
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
        label: 'Full',
        value: null,
        icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
    },
]

const component = computed(() => componentStore.getComponentByRoute(route.params.route as string));

useResizeObserver(resizableContainer, (entries) => {
    const entry = entries[0];
    if (!entry) return;
    const { width } = entry.contentRect;
    containerWidth.value = width;
});

const setPreviewWidth = (width: number | null) => {
    previewWidth.value = width;
};

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

watch(component, async () => {
    if (component.value && showPreview.value) {
        await nextTick();
        loadPreview();
    }
});

watch(() => route.params.route, async () => {
    if (showPreview.value) {
        await nextTick();
        loadPreview();
    }
});

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
        // incrementCopyCount already updates the local store value,
        // so there is no need to refetch the entire collection.
        componentStore.incrementCopyCount(component.value.id);
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
