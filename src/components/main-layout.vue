<template>
    <div>
        <div class="flex min-h-screen bg-[#0a0a0f]">
            <!-- Overlay for small screens when sidebar is open -->
            <div v-if="sidebarOpen" class="fixed inset-0 bg-black bg-opacity-75 z-30 lg:hidden"
                @click="sidebarOpen = false">
            </div>

            <!-- Sidebar Toggle Button (visible on small screens) -->
            <button @click="sidebarOpen = !sidebarOpen"
                class="lg:hidden fixed top-4 right-4 z-40 p-2 rounded-md text-cyan-400 bg-[#13131a] border border-gray-800/50 hover:bg-gray-800 transition-colors">
                <svg v-if="!sidebarOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>

            <!-- Sidebar -->
            <aside :class="{
                'translate-x-0': sidebarOpen,
                '-translate-x-full': !sidebarOpen,
                'lg:translate-x-0': true
            }"
                class="fixed inset-y-0 left-0 w-[280px] bg-[#13131a] text-white p-5 shrink-0 flex flex-col border-r border-gray-800/50 transition-transform duration-300 ease-in-out z-40 lg:fixed lg:top-0 lg:bottom-0 lg:block lg:h-screen">
                <div class="mb-5 pb-4 border-b border-gray-800/50 flex-shrink-0">
                    <div class="flex items-center gap-2.5">
                        <!-- Brand icon -->
                        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </div>
                        <span class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight">Free TW
                            Components</span>
                    </div>
                </div>

                <div class="relative mb-5 group flex-shrink-0">
                    <div
                        class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-300">
                    </div>
                    <input type="text" placeholder="Filter ..."
                        class="relative w-full px-3 py-2.5 pr-[60px] bg-[#1a1a24] border border-gray-800 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                        v-model="sidebarSearchQuery" @keydown.alt.f.prevent="focusMainSearch" />
                    <span
                        class="absolute right-2.5 top-1/2 -translate-y-1/2 bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs font-mono border border-cyan-500/30">
                        Alt F
                    </span>
                </div>

                <!-- Scrollable List Area -->
                <div class="flex-1 overflow-y-auto scrollbar-none max-h-[calc(100vh-160px)]">
                    <!-- Skeleton while data loads -->
                    <sidebar-skeleton v-if="componentsStore.loading" />

                    <ul v-else class="list-none p-0 pb-4 m-0 space-y-1">
                        <li class="relative flex justify-between items-center px-3 py-3 rounded-lg cursor-pointer transition-all duration-300 text-sm font-medium group"
                            :class="componentsStore.activeCategory === '' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'"
                            @click="selectCategory('')">
                            <div v-if="componentsStore.activeCategory === ''"
                                class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-r-full">
                            </div>
                            <span class="flex-grow pl-2 capitalize">
                                All Components
                            </span>
                            <span class="px-2 py-0.5 ml-2.5 rounded-md text-xs font-mono"
                                :class="componentsStore.activeCategory === '' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'">
                                {{ componentsStore.totalComponents }}
                            </span>
                        </li>
                        <li v-for="category in filteredSidebarCategories" :key="category.name"
                            class="relative flex justify-between items-center px-3 py-3 rounded-lg cursor-pointer transition-all duration-300 text-sm font-medium group"
                            :class="componentsStore.activeCategory === category.name ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'"
                            @click="selectCategory(category.name)">
                            <div v-if="componentsStore.activeCategory === category.name"
                                class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-r-full">
                            </div>
                            <span class="flex-grow pl-2 capitalize">
                                {{ category.name.replace(' Components', '') }}
                            </span>
                            <span class="px-2 py-0.5 ml-2.5 rounded-md text-xs font-mono"
                                :class="componentsStore.activeCategory === category.name ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'">
                                {{ componentsStore.getDisplayItems(category).length }}
                            </span>
                        </li>
                    </ul>
                </div>

                <!-- Sidebar Footer -->
                <div class="flex-shrink-0 pt-3 mt-2 border-t border-gray-800/50">
                    <div class="flex items-center justify-between px-1">
                        <span class="text-xs text-gray-700 font-mono">Tailwind CSS v3</span>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-1.5 text-gray-700 hover:text-gray-400 transition-colors text-xs"
                            title="GitHub">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </aside>

            <!-- Main Content Area (via slot) -->
            <div class="flex-grow mt-5 lg:ml-[280px]">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const componentsStore = useComponentsStore();

onMounted(() => {
    componentsStore.fetchComponents();
});

const sidebarOpen = ref(false);
const sidebarSearchQuery = ref('');

const filteredSidebarCategories = computed(() => {
    if (!sidebarSearchQuery.value) {
        return componentsStore.categories.filter(category => componentsStore.getDisplayItems(category).length > 0);
    }
    const query = sidebarSearchQuery.value.toLowerCase();
    return componentsStore.categories.filter(category => {
        const matchesName = category.name.toLowerCase().includes(query);
        const hasVisibleItems = componentsStore.getDisplayItems(category).length > 0;
        return matchesName && hasVisibleItems;
    });
});

const selectCategory = (categoryName: string) => {
    componentsStore.activeCategory = categoryName;
    if (window.innerWidth < 1024) {
        sidebarOpen.value = false;
    }
    componentsStore.searchQuery = ''; // Clear search to ensure category filter applies
    router.push('/'); // Navigate back to home to show component cards
};

const mainSearchInput = ref(null);

const focusMainSearch = () => {
    const target = mainSearchInput.value as any;
    if (target?.$refs?.searchInput) {
        target.$refs.searchInput.focus();
    }
};

onMounted(() => {
    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            sidebarOpen.value = false;
        }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', () => { });
});
</script>