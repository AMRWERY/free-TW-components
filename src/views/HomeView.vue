<template>
  <div>
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside
        class="w-[280px] bg-[#21212c] text-white p-5 shrink-0 sticky top-0 h-screen flex flex-col shadow-[2px_0_5px_rgba(0,0,0,0.2)]">
        <div class="text-2xl font-semibold mb-5 pb-4 border-b border-[#3a3a4c] capitalize">
          Collections
        </div>

        <!-- Filter Input (Fixed at top) -->
        <div class="relative mb-5">
          <input type="text" placeholder="Filter ..."
            class="w-full px-3 py-2 pr-[60px] bg-[#3a3a4c] border border-[#555] rounded-md text-white text-sm placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#5d5d81]"
            v-model="sidebarSearchQuery" @keydown.alt.f.prevent="focusMainSearch" />
          <span class="absolute right-2.5 top-1/2 -translate-y-1/2 bg-[#555] text-[#eee] px-1.5 py-0.5 rounded text-xs">
            Alt F
          </span>
        </div>

        <!-- Scrollable Menu Area -->
        <div class="flex-grow overflow-y-auto scrollbar-none">
          <ul class="list-none p-0 m-0">
            <li v-for="category in filteredSidebarCategories" :key="category.name"
              class="flex justify-between items-center px-2.5 py-3 mb-1.5 rounded-md cursor-pointer transition-all duration-200 text-[0.95rem] font-medium hover:bg-[#3a3a4c] hover:text-white"
              :class="{ 'bg-[#5d5d81] text-white': activeCategory === category.name }"
              @click="scrollToCategory(category.name)">
              <span class="flex-grow">
                {{ category.name.replace(' Components', '') }}
              </span>
              <span class="px-2 py-0.5 ml-2.5 rounded-xl text-xs"
                :class="activeCategory === category.name ? 'bg-[#3a3a4c] text-white' : 'bg-[#5d5d81] text-white'">
                {{ getDisplayItems(category).length }}
              </span>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Main Content Area -->
      <div class="flex-grow pl-5">
        <div class="max-w-2xl px-4 py-16 mx-auto space-y-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <Transition name="fade">
            <!-- Component Categories -->
            <div class="space-y-12">
              <div v-for="category in filteredCategories" :key="category.name" class="space-y-6"
                :id="category.name.replace(/\s+/g, '-')">
                <div class="flex justify-center">
                  <div class="section-title">
                    <div class="text-center">
                      <span class="text-3xl">{{ category.name }}</span>
                    </div>
                  </div>
                </div>
                <div
                  class="grid grid-cols-1 pb-8 mt-6 border-b border-gray-600 dark:border-gray-100 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  <div class="relative group transition-all duration-200" v-for="item in getDisplayItems(category)"
                    :key="item.title">
                    <router-link :to="item.route">
                      <div
                        class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75 transition-opacity">
                        <div class="flex items-center justify-center h-full">
                          <p class="text-2xl font-semibold truncate px-4">{{ item.title }}</p>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          <Transition name="fade">
            <!-- No results message -->
            <div v-if="searchQuery && filteredCategories.length === 0"
              class="text-center text-gray-500 py-8 text-3xl font-semibold">
              No Components found for <span class="underline">"{{ searchQuery }}"</span>. 😁
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
  { title: 'Contat Form One', route: '/contact-form-one' },
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
]);

const searchQuery = ref('');

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
  }
};

const handleScroll = () => {
  let found = false;
  for (let i = filteredCategories.value.length - 1; i >= 0; i--) {
    const category = filteredCategories.value[i];
    if (!category) continue; // Fix: Add null check
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
  transition: opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>