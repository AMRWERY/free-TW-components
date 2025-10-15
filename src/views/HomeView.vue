<template>
  <div>
    <div class="flex min-h-screen bg-[#0a0a0f]">
      <!-- Overlay for small screens when sidebar is open -->
      <div v-if="sidebarOpen" class="fixed inset-0 bg-black bg-opacity-75 z-30 lg:hidden" @click="sidebarOpen = false">
      </div>

      <!-- Sidebar Toggle Button (visible on small screens) -->
      <button @click="sidebarOpen = !sidebarOpen"
        class="lg:hidden fixed top-4 right-4 z-40 p-2 rounded-md text-cyan-400 bg-[#13131a] border border-gray-800/50 hover:bg-gray-800 transition-colors">
        <svg v-if="!sidebarOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Sidebar -->
      <aside :class="{
        'translate-x-0': sidebarOpen,
        '-translate-x-full': !sidebarOpen,
        'lg:translate-x-0': true
      }" class="fixed inset-y-0 left-0 w-[280px] bg-[#13131a] text-white p-5 shrink-0 flex flex-col border-r border-gray-800/50
         transition-transform duration-300 ease-in-out z-40
         lg:fixed lg:top-0 lg:bottom-0 lg:block lg:h-screen">

        <div class="text-2xl font-bold mb-5 pb-4 border-b border-gray-800/50 flex-shrink-0">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Collections</span>
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
            <li v-for="category in filteredSidebarCategories" :key="category.name"
              class="relative flex justify-between items-center px-3 py-3 rounded-lg cursor-pointer transition-all duration-300 text-sm font-medium group"
              :class="activeCategory === category.name ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'"
              @click="scrollToCategory(category.name)">
              <div v-if="activeCategory === category.name"
                class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-r-full">
              </div>
              <span class="flex-grow pl-2">
                {{ category.name.replace(' Components', '') }}
              </span>
              <span class="px-2 py-0.5 ml-2.5 rounded-md text-xs font-mono"
                :class="activeCategory === category.name ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'">
                {{ getDisplayItems(category).length }}
              </span>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Main Content Area -->
      <div class="flex-grow mt-5 lg:ml-[280px]">
        <div class="max-w-[1600px] px-6 py-12 mx-auto lg:pl-4 pl-16">
          <Transition name="fade">
            <!-- Component Categories -->
            <div class="space-y-24">
              <div v-for="category in filteredCategories" :key="category.name" class="space-y-8"
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
                            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                            {{ category.name }}
                          </span>
                        </h2>
                        <div class="flex items-center space-x-4 text-sm">
                          <span class="text-gray-400">{{ getDisplayItems(category).length }} components</span>
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
                <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <div class="relative group" v-for="item in getDisplayItems(category)" :key="item.title">
                    <div
                      class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-50 blur transition duration-500">
                    </div>
                    <router-link :to="item.route">
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
                                {{ item.title.match(/\d+/)?.[0] || '#' }}
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
            <div v-if="searchQuery && filteredCategories.length === 0"
              class="flex flex-col items-center justify-center py-32">
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
                  searchQuery }}</span>
              </p>

              <p class="text-gray-600 text-sm mb-8">Try different keywords or clear your search</p>

              <button @click="searchQuery = ''" class="relative group">
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const banners = ref([
  { title: 'Banner One', route: '/banner-one' },
  { title: 'Banner Two', route: '/banner-two' },
]);

const blogs = ref([
  { title: 'Blogs One', route: '/blogs-one' },
  { title: 'Blogs Two', route: '/blogs-two' },
  { title: 'Blogs Three', route: '/blogs-three' },
  { title: 'Blogs Four', route: '/blogs-four' },
]);

const collections = ref([
  { title: 'Collections One', route: '/collections-one' },
  { title: 'Collections Two', route: '/collections-two' },
  { title: 'Collections Three', route: '/collections-three' },
]);

const content = ref([
  { title: 'Content One', route: '/content-one' },
  { title: 'Content Two', route: '/content-two' },
]);

const callToAction = ref([
  { title: 'Call To Action One', route: '/call-to-action-one' },
  { title: 'Call To Action Two', route: '/call-to-action-two' },
  { title: 'Call To Action Three', route: '/call-to-action-three' },
  { title: 'Call To Action Four', route: '/call-to-action-four' },
]);

const faq = ref([
  { title: 'FAQ One', route: '/faq-one' },
  { title: 'FAQ Two', route: '/faq-two' },
  { title: 'FAQ Three', route: '/faq-three' },
  { title: 'FAQ Four', route: '/faq-four' },
]);

const features = ref([
  { title: 'Features One', route: '/features-one' },
  { title: 'Features Two', route: '/features-two' },
  { title: 'Features Three', route: '/features-Three' },
  { title: 'Features Four', route: '/features-Four' },
  { title: 'Features Five', route: '/features-Five' },
]);

const floatingNavigation = ref([
  { title: 'Floating Navigation One', route: '/floating-navigation-one' },
  { title: 'Floating Navigation Two', route: '/floating-navigation-two' },
  { title: 'Floating Navigation Three', route: '/floating-navigation-three' },
]);

const footer = ref([
  { title: 'Footer One', route: '/footer-one' },
  { title: 'Footer Two', route: '/footer-two' },
  { title: 'Footer Three', route: '/footer-three' },
  { title: 'Footer Four', route: '/footer-four' },
  { title: 'Footer Five', route: '/footer-five' },
  { title: 'Footer Six', route: '/footer-six' },
  { title: 'Footer Seven', route: '/footer-seven' },
  { title: 'Footer Eight', route: '/footer-eight' },
]);

const forms = ref([
  { title: 'Contact Form One', route: '/contact-form-one' },
  { title: 'Auth Form One', route: '/auth-form-one' },
]);

const fullPage = ref([
  { title: 'Full Page One', route: '/full-page-one' },
  { title: 'Full Page Two', route: '/full-page-two' },
  { title: 'Full Page Three', route: '/full-page-three' },
]);

const gallery = ref([
  { title: 'Gallery One', route: '/gallery-one' },
  { title: 'Gallery Two', route: '/gallery-two' },
  { title: 'Gallery Three', route: '/gallery-three' },
]);

const header = ref([
  { title: 'Header One', route: '/header-one' },
  { title: 'Header Two', route: '/header-two' },
]);

const heading = ref([
  { title: 'Heading One', route: '/heading-one' },
  { title: 'Heading Two', route: '/heading-two' },
  { title: 'Heading Three', route: '/heading-three' },
]);

const hero = ref([
  { title: 'Hero One', route: '/hero-one' },
  { title: 'Hero Two', route: '/hero-two' },
  { title: 'Hero Three', route: '/hero-three' },
  { title: 'Hero Four', route: '/hero-four' },
  { title: 'Hero Five', route: '/hero-five' },
  { title: 'Hero Six', route: '/hero-six' },
  { title: 'Hero Seven', route: '/hero-seven' },
  { title: 'Hero Eight', route: '/hero-eight' },
]);

const logoCloud = ref([
  { title: 'Logo Cloud One', route: '/logo-cloud-one' },
  { title: 'Logo Cloud Two', route: '/logo-cloud-two' },
  { title: 'Logo Cloud Three', route: '/logo-cloud-three' },
]);

const newsletter = ref([
  { title: 'Newsletter One', route: '/newsletter-one' },
  { title: 'Newsletter Two', route: '/newsletter-two' },
  { title: 'Newsletter Three', route: '/newsletter-three' },
]);

const pricing = ref([
  { title: 'Pricing One', route: '/pricing-one' },
  { title: 'Pricing Two', route: '/pricing-two' },
  { title: 'Pricing Three', route: '/pricing-three' },
  { title: 'Pricing Four', route: '/pricing-four' },
]);

const productDetails = ref([
  { title: 'Product Details One', route: '/product-details-one' },
  { title: 'Product Details Two', route: '/product-details-two' },
]);

const productGrid = ref([
  { title: 'Product Grid One', route: '/product-grid-one' },
  { title: 'Product Grid Two', route: '/product-grid-two' },
  { title: 'Product Grid Three', route: '/product-grid-three' },
]);

const categories = ref([
  { name: 'Banner Components', items: banners.value },
  { name: 'Blog Components', items: blogs.value },
  { name: 'Collections Components', items: collections.value },
  { name: 'Content Components', items: content.value },
  { name: 'Call to Action Components', items: callToAction.value },
  { name: 'FAQ Components', items: faq.value },
  { name: 'Features Components', items: features.value },
  { name: 'Floating Navigation Components', items: floatingNavigation.value },
  { name: 'Footer Components', items: footer.value },
  { name: 'Form Components', items: forms.value },
  { name: 'Full Page Components', items: fullPage.value },
  { name: 'Gallery Components', items: gallery.value },
  { name: 'Header Components', items: header.value },
  { name: 'Heading Components', items: heading.value },
  { name: 'Hero Components', items: hero.value },
  { name: 'Logo Cloud Components', items: logoCloud.value },
  { name: 'Newsletter Components', items: newsletter.value },
  { name: 'Pricing Components', items: pricing.value },
  { name: 'Product Details Components', items: productDetails.value },
  { name: 'Product Grid Components', items: productGrid.value },
]);

const searchQuery = ref('');
const sidebarOpen = ref(false);

const getDisplayItems = (category: { name: string; items: { title: string; route: string }[] }) => {
  if (!searchQuery.value) return category.items;
  const query = searchQuery.value.toLowerCase();
  const categoryNameLower = category.name.toLowerCase();
  if (categoryNameLower.includes(query)) {
    return category.items;
  } else {
    return category.items.filter(item => item.title.toLowerCase().includes(query));
  }
};

const filteredCategories = computed(() => {
  if (!searchQuery.value) return categories.value;
  return categories.value.filter(category => getDisplayItems(category).length > 0);
});

const sidebarSearchQuery = ref('');
const activeCategory = ref('');
const mainSearchInput = ref<{ $refs: { searchInput: HTMLInputElement } } | null>(null);

const filteredSidebarCategories = computed(() => {
  if (!sidebarSearchQuery.value) {
    return categories.value.filter(category => getDisplayItems(category).length > 0);
  }
  const query = sidebarSearchQuery.value.toLowerCase();
  return categories.value.filter(category => {
    const matchesName = category.name.toLowerCase().includes(query);
    const hasVisibleItems = getDisplayItems(category).length > 0;
    return matchesName && hasVisibleItems;
  });
});

const scrollToCategory = (categoryName: string) => {
  const id = categoryName.replace(/\s+/g, '-');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    activeCategory.value = categoryName;
    // Close sidebar on small screens (below lg: breakpoint, 1024px)
    if (window.innerWidth < 1024) {
      sidebarOpen.value = false;
    }
  }
};

const handleScroll = () => {
  let found = false;
  for (let i = filteredCategories.value.length - 1; i >= 0; i--) {
    const category = filteredCategories.value[i];
    if (!category) continue;
    const id = category.name.replace(/\s+/g, '-');
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 3 && rect.bottom >= 0) {
        activeCategory.value = category.name;
        found = true;
        break;
      }
    }
  }
  if (!found) {
    activeCategory.value = '';
  }
};

const focusMainSearch = () => {
  if (mainSearchInput.value?.$refs?.searchInput) {
    mainSearchInput.value.$refs.searchInput.focus();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      sidebarOpen.value = false;
    }
  };
  window.addEventListener('resize', handleResize);
  // Also add initial check
  handleResize(); // Check on mount
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scrollbar-none {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-none::-webkit-scrollbar {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.4;
  }

  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

@keyframes ping-slower {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  50% {
    transform: scale(1.15);
    opacity: 0.3;
  }

  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.animate-ping-slow {
  animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-ping-slower {
  animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>