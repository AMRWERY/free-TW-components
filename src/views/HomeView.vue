<template>
  <div>
    <div class="max-w-[1600px] px-4 sm:px-6 py-10 mx-auto lg:pl-4 pl-16 min-h-screen flex flex-col">
      <!-- Skeleton Loader -->
      <home-skeleton v-if="componentsStore.loading" />

      <!-- Error State -->
      <div v-else-if="componentsStore.error" class="flex flex-col items-center justify-center py-32 flex-grow">
        <div class="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
          <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-2 text-red-400">Failed to load components</h3>
        <p class="text-gray-500 mb-8 text-sm">{{ componentsStore.error }}</p>
        <button @click="() => componentsStore.fetchComponents(true)" class="relative group">
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg opacity-50 group-hover:opacity-100 blur transition duration-300">
          </div>
          <div
            class="relative px-6 py-2.5 bg-[#13131a] rounded-lg font-semibold text-red-400 border border-red-500/30 group-hover:text-white transition-colors text-sm">
            Try again
          </div>
        </button>
      </div>

      <!-- Main Content -->
      <div v-else class="flex flex-col flex-grow">

        <!-- ─── Hero (no category selected) ─── -->
        <div v-if="!componentsStore.activeCategory"
          class="flex-grow flex flex-col items-center justify-center py-12 px-4">
          <!-- Animated gradient title -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center leading-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-hue">
              Free Tailwind Components
            </span>
          </h1>
          <p class="text-gray-400 text-base sm:text-lg max-w-2xl mb-10 text-center leading-relaxed">
            A growing collection of free, copy-paste Tailwind CSS components to accelerate your
            projects — no install required.
          </p>

          <!-- Stats Row -->
          <div class="flex items-center justify-center gap-6 sm:gap-10 mb-12 flex-wrap">
            <div class="text-center group">
              <div
                class="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 tabular-nums">
                {{ componentsStore.totalComponents }}+
              </div>
              <div class="text-xs text-gray-600 mt-1 font-mono uppercase tracking-widest">Components</div>
            </div>
            <div class="w-px h-10 bg-gray-800 hidden sm:block"></div>
            <div class="text-center">
              <div
                class="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tabular-nums">
                {{ componentsStore.categories.length }}
              </div>
              <div class="text-xs text-gray-600 mt-1 font-mono uppercase tracking-widest">Categories</div>
            </div>
            <div class="w-px h-10 bg-gray-800 hidden sm:block"></div>
            <div class="text-center">
              <div
                class="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Free
              </div>
              <div class="text-xs text-gray-600 mt-1 font-mono uppercase tracking-widest">Forever</div>
            </div>
          </div>

          <!-- Category Quick Access -->
          <div v-if="componentsStore.categories.length" class="w-full max-w-4xl">
            <div class="flex items-center gap-3 mb-5">
              <div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
              <span class="text-xs font-mono text-gray-600 uppercase tracking-widest px-2">Browse categories</span>
              <div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button v-for="cat in componentsStore.categories" :key="cat.name"
                @click="navigateToCategory(cat.name)"
                class="group relative p-4 rounded-xl bg-[#13131a] border border-gray-800/60 hover:border-cyan-500/30 transition-all duration-300 text-left overflow-hidden">
                <!-- Hover glow -->
                <div
                  class="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300">
                </div>
                <!-- Active indicator line -->
                <div
                  class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
                </div>
                <div class="relative">
                  <span
                    class="text-sm font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors capitalize block mb-1 leading-snug">
                    {{ cat.name.replace(/\s*[Cc]omponents?\s*/g, '').trim() || cat.name }}
                  </span>
                  <span class="text-xs font-mono text-gray-600 group-hover:text-gray-500 transition-colors">
                    {{ (cat.items ?? []).length }} component{{ (cat.items ?? []).length !== 1 ? 's' : '' }}
                  </span>
                </div>
              </button>
            </div>
          </div>

          <!-- Bottom divider -->
          <div class="flex items-center justify-center pt-16">
            <div class="flex items-center space-x-3">
              <div class="w-24 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
              <div class="w-1.5 h-1.5 rounded-full bg-cyan-500/40"></div>
              <div class="w-24 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            </div>
          </div>
        </div>

        <!-- ─── Category View ─── -->
        <div v-else class="flex flex-col">
          <Transition name="fade">
            <div class="space-y-8">
              <div :key="componentsStore.activeCategory" class="space-y-6"
                :id="componentsStore.activeCategory.replace(/\s+/g, '-')">

                <!-- Glassmorphism Category Header -->
                <div class="relative group">
                  <div
                    class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-15 blur-xl group-hover:opacity-25 transition duration-500">
                  </div>
                  <div class="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
                    <div class="flex items-start justify-between gap-4">
                      <div class="min-w-0">
                        <h2 class="text-3xl sm:text-4xl font-bold mb-2">
                          <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 capitalize">
                            {{ componentsStore.activeCategory }}
                          </span>
                        </h2>
                        <div class="flex items-center flex-wrap gap-3 text-sm">
                          <span class="text-gray-400">{{ componentsStore.displayedItemsCount }} components</span>
                          <span class="w-1 h-1 bg-gray-700 rounded-full"></span>
                          <span class="text-cyan-400 font-mono text-xs">Ready to use</span>
                        </div>
                      </div>
                      <div
                        class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                        <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Search + Layout Toggle Row -->
                <div class="flex items-center gap-3 flex-wrap">
                  <!-- Search Bar -->
                  <div class="relative flex-1 min-w-[200px] group">
                    <div
                      class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-focus-within:opacity-20 blur transition duration-300">
                    </div>
                    <div class="relative flex items-center">
                      <svg
                        class="absolute left-3 w-4 h-4 text-gray-500 pointer-events-none z-10 group-focus-within:text-cyan-400 transition-colors"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0" />
                      </svg>
                      <input type="text" placeholder="Search components..."
                        class="relative w-full pl-9 pr-4 py-2.5 bg-[#13131a] border border-gray-800 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-all"
                        v-model="componentsStore.searchQuery" ref="searchInput" />
                      <button v-if="componentsStore.searchQuery" @click="componentsStore.searchQuery = ''"
                        class="absolute right-3 text-gray-600 hover:text-gray-300 transition-colors">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <!-- Layout Toggle -->
                  <div class="flex items-center bg-gray-800/60 border border-gray-700/50 rounded-xl p-0.5 flex-shrink-0">
                    <button @click="layoutMode = 'grid'" :class="[
                      'px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-1.5',
                      layoutMode === 'grid'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-500/20'
                        : 'text-gray-400 hover:text-gray-200'
                    ]">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      <span class="hidden sm:inline text-xs font-medium">Grid</span>
                    </button>
                    <button @click="layoutMode = 'single'" :class="[
                      'px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-1.5',
                      layoutMode === 'single'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/20'
                        : 'text-gray-400 hover:text-gray-200'
                    ]">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      <span class="hidden sm:inline text-xs font-medium">List</span>
                    </button>
                  </div>
                </div>

                <!-- No Results State -->
                <div v-if="!isLoadingPage && componentsStore.paginatedComponents.length === 0"
                  class="flex flex-col items-center justify-center py-24 text-center">
                  <div
                    class="w-16 h-16 rounded-2xl bg-gray-800/60 border border-gray-700/50 flex items-center justify-center mb-4">
                    <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p class="text-gray-400 font-medium mb-1">No components found</p>
                  <p class="text-gray-600 text-sm mb-4">Try a different search term</p>
                  <button @click="componentsStore.searchQuery = ''"
                    class="text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono border border-cyan-500/20 px-3 py-1.5 rounded-lg hover:bg-cyan-500/5">
                    Clear search
                  </button>
                </div>

                <!-- Skeleton Grid -->
                <div v-else-if="isLoadingPage" :class="[
                  'grid gap-4 sm:gap-5 transition-all duration-500',
                  layoutMode === 'single' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                ]">
                  <div v-for="i in componentsStore.itemsPerPage" :key="`skeleton-${i}`"
                    class="relative rounded-xl bg-[#13131a] border border-gray-800 animate-pulse overflow-hidden"
                    :class="layoutMode === 'single' ? 'h-80' : 'h-36'">
                    <div v-if="layoutMode === 'single'" class="p-6 space-y-4">
                      <div class="h-36 bg-gray-800/60 rounded-lg"></div>
                      <div class="h-5 bg-gray-800/60 rounded w-2/3"></div>
                      <div class="h-3.5 bg-gray-800/60 rounded w-1/2"></div>
                    </div>
                    <div v-else class="p-5 space-y-3">
                      <div class="flex justify-between items-center">
                        <div class="w-9 h-9 bg-gray-800/60 rounded-lg"></div>
                        <div class="w-4 h-4 bg-gray-800/60 rounded"></div>
                      </div>
                      <div class="h-4 bg-gray-800/60 rounded w-2/3"></div>
                      <div class="h-3 bg-gray-800/60 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>

                <!-- Component Cards Grid -->
                <div v-else :class="[
                  'grid gap-4 sm:gap-5 transition-all duration-500',
                  layoutMode === 'single' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                ]">
                  <div v-for="item in componentsStore.paginatedComponents" :key="item.title"
                    class="relative group">
                    <!-- Neon glow on hover -->
                    <div
                      class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-40 blur transition duration-500">
                    </div>

                    <router-link :to="`/${item.route}`" class="block">
                      <div :class="[
                        'relative overflow-hidden rounded-xl bg-[#13131a] border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-500',
                        layoutMode === 'single' ? 'p-6' : 'p-5'
                      ]">
                        <!-- Subtle grid pattern background -->
                        <div class="absolute inset-0 opacity-5 pointer-events-none">
                          <div class="absolute inset-0"
                            style="background-image: linear-gradient(rgba(6,182,212,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.15) 1px, transparent 1px); background-size: 24px 24px;">
                          </div>
                        </div>

                        <!-- Hover gradient overlay -->
                        <div
                          class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none">
                        </div>

                        <!-- Single view: thumbnail -->
                        <div v-if="layoutMode === 'single'" class="relative h-44 mb-5 rounded-lg overflow-hidden border border-gray-800/50 bg-gray-900/60">
                          <img v-if="item.thumbnail && isValidBase64(item.thumbnail)" :src="item.thumbnail"
                            alt="Component Thumbnail" class="w-full h-full object-cover" />
                          <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2">
                            <svg class="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p class="text-xs text-gray-600">No preview available</p>
                          </div>
                        </div>

                        <!-- Card Content -->
                        <div class="relative">
                          <div class="flex items-start justify-between gap-3 mb-3">
                            <div
                              class="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <span class="text-cyan-400 font-mono text-xs font-bold">
                                {{ item.title?.match(/\d+/)?.[0] || '#' }}
                              </span>
                            </div>
                            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </div>

                          <h3
                            class="text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-1.5 leading-tight"
                            :class="layoutMode === 'single' ? 'text-xl' : ''">
                            {{ item.title }}
                          </h3>

                          <!-- Description -->
                          <p v-if="item.description"
                            class="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2">
                            {{ item.description }}
                          </p>
                          <p v-else class="text-xs text-gray-600 font-mono">Click to view</p>

                          <!-- Single view: feature tags -->
                          <div v-if="layoutMode === 'single'"
                            class="flex items-center gap-3 mt-4 flex-wrap">
                            <span class="text-xs text-gray-600 flex items-center gap-1">
                              <svg class="w-3 h-3 text-cyan-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                              Responsive
                            </span>
                            <span class="text-xs text-gray-600 flex items-center gap-1">
                              <svg class="w-3 h-3 text-blue-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                              Copy & Paste
                            </span>
                            <span v-if="(item as any).copy_count" class="text-xs text-gray-600 flex items-center gap-1">
                              <svg class="w-3 h-3 text-purple-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              {{ (item as any).copy_count }} uses
                            </span>
                          </div>
                        </div>

                        <!-- Bottom neon line -->
                        <div
                          class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>

                <!-- Bottom divider -->
                <div class="flex items-center justify-center pt-8">
                  <div class="flex items-center space-x-3">
                    <div class="w-24 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-cyan-500/30"></div>
                    <div class="w-24 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          <!-- Pagination -->
          <pagination
            v-if="componentsStore.activeCategory && componentsStore.displayedItemsCount > componentsStore.itemsPerPage"
            :total-items="componentsStore.displayedItemsCount" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const componentsStore = useComponentsStore();

const searchInput = ref<HTMLInputElement | null>(null);
const mainSearchInput = ref<{ $refs: { searchInput: HTMLInputElement } } | null>(null);
const layoutMode = ref<'grid' | 'single'>('grid');

provide('mainSearchInput', mainSearchInput);

const navigateToCategory = (categoryName: string) => {
  componentsStore.activeCategory = categoryName;
  componentsStore.searchQuery = '';
  componentsStore.resetPagination();
};

watch(() => componentsStore.activeCategory, () => {
  componentsStore.resetPagination();
});

watch(() => componentsStore.searchQuery, () => {
  componentsStore.resetPagination();
});

const isLoadingPage = ref(false);

watch(() => componentsStore.currentPage, async () => {
  isLoadingPage.value = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  await new Promise(resolve => setTimeout(resolve, 280));
  isLoadingPage.value = false;
});

const isValidBase64 = (str: string | null): boolean => {
  if (!str) return false;
  try {
    return str.startsWith("data:image/") && str.length > 100;
  } catch {
    return false;
  }
};
</script>

<style scoped>
@keyframes hue {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
.animate-hue {
  animation: hue 6s linear infinite;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
