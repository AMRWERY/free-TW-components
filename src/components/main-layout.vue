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
                <div class="text-xl font-bold mb-5 pb-4 border-b border-gray-800/50 flex-shrink-0">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Free TW
                        Components</span>
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
                <div class="flex-1 overflow-y-auto scrollbar-none max-h-[calc(100vh-128px)]">
                    <ul class="list-none p-0 pb-12 m-0 space-y-1">
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