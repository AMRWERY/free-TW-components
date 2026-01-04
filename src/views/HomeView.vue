<template>
  <div>
    <div class="max-w-[1600px] px-6 py-12 mx-auto lg:pl-4 pl-16 min-h-screen flex flex-col">
      <!-- Loading State -->
      <div v-if="componentsStore.loading" class="flex justify-center items-center py-32 flex-grow">
        <div class="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="componentsStore.error" class="flex flex-col items-center justify-center py-32 flex-grow">
        <h3 class="text-3xl font-bold mb-3 text-red-400">Error Loading Components</h3>
        <p class="text-gray-400 mb-8">{{ componentsStore.error }}</p>
        <button @click="componentsStore.fetchComponents" class="relative group">
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg opacity-50 group-hover:opacity-100 blur transition duration-300">
          </div>
          <div
            class="relative px-8 py-3 bg-[#13131a] rounded-lg font-semibold text-red-400 border border-red-500/30 group-hover:text-white transition-colors">
            Retry
          </div>
        </button>
      </div>

      <!-- Main Content -->
      <div v-else class="flex flex-col flex-grow">
        <!-- Home Page Content (when no category is selected) -->
        <div v-if="!componentsStore.activeCategory" class="flex-grow flex flex-col items-center justify-center py-12">
          <h1 class="text-5xl font-bold mb-6 text-center">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-hue">
              Free Tailwind Components
            </span>
          </h1>
          <p class="text-gray-300 text-xl max-w-2xl mb-8 text-center">
            Explore our collection of free, ready-to-use Tailwind CSS components designed to accelerate your web
            development. Browse categories in the sidebar to find buttons, cards, forms, and more, all customizable and
            easy to integrate.
          </p>
          <!-- Minimal Divider -->
          <div class="flex items-center justify-center pt-12">
            <div class="flex items-center space-x-4">
              <div class="w-32 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <div class="w-2 h-2 rounded-full bg-cyan-500/50"></div>
              <div class="w-32 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </div>
          </div>
        </div>

        <!-- Main Search Input and Categories (when a category is selected) -->
        <div v-else class="flex flex-col">
          <Transition name="fade">
            <!-- Component Categories -->
            <div class="space-y-24">
              <!-- Category Header remains, but we might only show one if activeCategory is set -->
              <div v-if="componentsStore.activeCategory" :key="componentsStore.activeCategory" class="space-y-8"
                :id="componentsStore.activeCategory.replace(/\s+/g, '-')">
                <!-- Glassmorphism Category Header -->
                <div class="relative group">
                  <div
                    class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition duration-500">
                  </div>
                  <div class="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <div class="flex items-center justify-between">
                      <div>
                        <h2 class="text-4xl font-bold mb-2">
                          <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 capitalize">
                            {{ componentsStore.activeCategory }}
                          </span>
                        </h2>
                        <div class="flex items-center space-x-4 text-sm">
                          <span class="text-gray-400">{{ componentsStore.displayedItemsCount }}
                            components</span>
                          <span class="w-1 h-1 bg-gray-600 rounded-full"></span>
                          <span class="text-cyan-400 font-mono">Ready to use</span>
                        </div>
                      </div>
                      <div
                        class="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm">
                        <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Toggle View btns -->
                <div class="flex justify-end mb-6 space-x-2">
                  <!-- 3 Cards Button (Active by default) -->
                  <button @click="layoutMode = 'grid'" :class="[
                    'px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center',
                    layoutMode === 'grid'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-white/20'
                  ]">
                    <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>

                  <!-- 1 Card Button -->
                  <button @click="layoutMode = 'single'" :class="[
                    'px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center',
                    layoutMode === 'single'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-white/20'
                  ]">
                    <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </button>
                </div>

                <div v-if="isLoadingPage" :class="[
                  'grid gap-5 transition-all duration-500',
                  layoutMode === 'single' ? 'grid-cols-1 lg:grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                ]">
                  <div v-for="i in componentsStore.itemsPerPage" :key="`skeleton-${i}`" class="relative group">
                    <div :class="[
                      'relative overflow-hidden rounded-xl bg-[#13131a] border border-gray-800 animate-pulse',
                      layoutMode === 'single' ? 'h-96 p-8' : 'h-40 p-5'
                    ]">
                      <!-- Skeleton Content for Single View -->
                      <div v-if="layoutMode === 'single'" class="space-y-4">
                        <div class="h-48 bg-gray-800/50 rounded-lg"></div>
                        <div class="h-6 bg-gray-800/50 rounded w-3/4"></div>
                        <div class="h-4 bg-gray-800/50 rounded w-1/2"></div>
                        <div class="flex justify-between mt-4">
                          <div class="h-4 bg-gray-800/50 rounded w-20"></div>
                          <div class="h-4 bg-gray-800/50 rounded w-20"></div>
                          <div class="h-4 bg-gray-800/50 rounded w-20"></div>
                        </div>
                      </div>
                      <!-- Skeleton Content for Grid View -->
                      <div v-else class="space-y-3">
                        <div class="flex justify-between items-center">
                          <div class="w-10 h-10 bg-gray-800/50 rounded-lg"></div>
                          <div class="w-5 h-5 bg-gray-800/50 rounded"></div>
                        </div>
                        <div class="h-5 bg-gray-800/50 rounded w-2/3"></div>
                        <div class="h-3 bg-gray-800/50 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Neon Grid Cards - RESPONSIVE LAYOUT -->
                <div v-else :class="[
                  'grid gap-5 transition-all duration-500',
                  layoutMode === 'single' ? 'grid-cols-1 lg:grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                ]">
                  <!-- Iterate directly over paginatedComponents -->
                  <div v-for="item in componentsStore.paginatedComponents" :key="item.title" class="relative group">
                    <div
                      class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-50 blur transition duration-500">
                    </div>

                    <router-link :to="`/${item.route}`">
                      <div :class="[
                        'relative overflow-hidden rounded-xl bg-[#13131a] border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-500',
                        layoutMode === 'single' ? 'h-96 p-8' : 'h-40 p-5'  // Tall card for single view
                      ]">
                        <!-- Grid Pattern Background -->
                        <div class="absolute inset-0 opacity-10">
                          <div class="absolute inset-0"
                            style="background-image: linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px); background-size: 20px 20px;">
                          </div>
                        </div>

                        <!-- SINGLE VIEW ONLY: Thumbnail Display Area -->
                        <div v-if="layoutMode === 'single'" class="relative h-48 mb-6 border-b border-gray-800/50">
                          <!-- Thumbnail Preview Area -->
                          <div
                            class="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent flex items-center justify-center">
                            <div
                              class="w-full h-full border-2 border-dashed border-gray-600/50 rounded-lg flex items-center justify-center">
                              <img v-if="item.thumbnail && isValidBase64(item.thumbnail)" :src="item.thumbnail"
                                alt="Component Thumbnail" class="w-full h-full object-cover rounded-lg" />
                              <div v-else class="text-center text-gray-500">
                                <svg class="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor"
                                  viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p class="text-sm font-medium">No Thumbnail Available</p>
                                <p class="text-xs">Click card to view full demo</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Hover Gradient Overlay -->
                        <div
                          class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500">
                        </div>

                        <!-- Content -->
                        <div class="relative h-full flex flex-col justify-between">
                          <div class="flex items-start justify-between">
                            <div
                              class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                              <span class="text-cyan-400 font-mono text-sm font-bold">
                                {{ item.title?.match(/\d+/)?.[0] || '#' }}
                              </span>
                            </div>
                            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </div>

                          <!-- SINGLE VIEW: Larger Title & Description -->
                          <div :class="[
                            'flex-grow',
                            layoutMode === 'single' ? 'mt-4 mb-6' : ''
                          ]">
                            <h3
                              class="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300 lg:text-2xl mt-2"
                              :class="layoutMode === 'single' ? 'leading-tight' : ''">
                              {{ item.title }}
                            </h3>

                            <p class="text-xs text-gray-500 font-mono">Click to preview</p>
                          </div>

                          <!-- SINGLE VIEW: Additional Info -->
                          <div v-if="layoutMode === 'single'"
                            class="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span>📱 Responsive</span>
                            <span>⚡ Copy & Paste</span>
                            <span>🎨 Customizable</span>
                          </div>
                        </div>
                        <!-- Bottom Neon Line -->
                        <div
                          class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>

                <!-- Minimal Divider -->
                <div class="flex items-center justify-center pt-12">
                  <div class="flex items-center space-x-4">
                    <div class="w-32 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                    <div class="w-2 h-2 rounded-full bg-cyan-500/50"></div>
                    <div class="w-32 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          <!-- pagination component -->
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

const mainSearchInput = ref<{ $refs: { searchInput: HTMLInputElement } } | null>(null);

const layoutMode = ref<'grid' | 'single'>('grid');

provide('mainSearchInput', mainSearchInput);

watch(() => componentsStore.activeCategory, () => {
  componentsStore.resetPagination()
})

// Watch search to reset pagination
watch(() => componentsStore.searchQuery, () => {
  componentsStore.resetPagination()
})

const isLoadingPage = ref(false);
const contentContainer = ref<HTMLElement | null>(null);

watch(() => componentsStore.currentPage, async () => {
  isLoadingPage.value = true;

  // Scroll to top of content
  if (contentContainer.value) {
    contentContainer.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Simulate loading delay (remove if data fetching handles this)
  await new Promise(resolve => setTimeout(resolve, 300));
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
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}

.animate-hue {
  animation: hue 5s linear infinite;
}
</style>