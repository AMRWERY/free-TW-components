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
              <div v-for="category in componentsStore.filteredCategories" :key="category.name" class="space-y-8"
                :id="category.name.replace(/\s+/g, '-')">
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
                            {{ category.name }}
                          </span>
                        </h2>
                        <div class="flex items-center space-x-4 text-sm">
                          <span class="text-gray-400">{{ componentsStore.getDisplayItems(category).length }}
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

                <!-- Neon Grid Cards -->
                <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <div class="relative group" v-for="item in componentsStore.getDisplayItems(category)"
                    :key="item.title">
                    <div
                      class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-50 blur transition duration-500">
                    </div>
                    <router-link :to="`/${item.route}`">
                      <div
                        class="relative h-40 overflow-hidden rounded-xl bg-[#13131a] border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-500">
                        <!-- Grid Pattern Background -->
                        <div class="absolute inset-0 opacity-10">
                          <div class="absolute inset-0"
                            style="background-image: linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px); background-size: 20px 20px;">
                          </div>
                        </div>

                        <!-- Hover Gradient Overlay -->
                        <div
                          class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500">
                        </div>

                        <!-- Content -->
                        <div class="relative h-full p-5 flex flex-col justify-between">
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

                          <div>
                            <h3
                              class="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                              {{ item.title }}
                            </h3>
                            <p class="text-xs text-gray-500 font-mono">Click to preview</p>
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

          <Transition name="fade">
            <!-- Cyberpunk No Results -->
            <div v-if="componentsStore.searchQuery && componentsStore.filteredCategories.length === 0"
              class="flex flex-col items-center justify-center py-32 flex-grow">
              <div class="relative">
                <!-- Animated Rings -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-48 h-48 rounded-full border-2 border-cyan-500/20 animate-ping-slow"></div>
                  <div class="absolute w-40 h-40 rounded-full border-2 border-blue-500/20 animate-ping-slower"></div>
                </div>

                <!-- Center Icon -->
                <div
                  class="relative w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm">
                  <svg class="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <h3 class="text-3xl font-bold mb-3">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  No Components Found
                </span>
              </h3>

              <p class="text-gray-400 mb-2 text-center max-w-md">
                No matches for
                <span class="font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/30">{{
                  componentsStore.searchQuery }}</span>
              </p>

              <p class="text-gray-600 text-sm mb-8">Try different keywords or clear your search</p>

              <button @click="componentsStore.searchQuery = ''" class="relative group">
                <div
                  class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-50 group-hover:opacity-100 blur transition duration-300">
                </div>
                <div
                  class="relative px-8 py-3 bg-[#13131a] rounded-lg font-semibold text-cyan-400 border border-cyan-500/30 group-hover:text-white transition-colors">
                  Clear Search
                </div>
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const componentsStore = useComponentsStore();

const mainSearchInput = ref<{ $refs: { searchInput: HTMLInputElement } } | null>(null);

provide('mainSearchInput', mainSearchInput);
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