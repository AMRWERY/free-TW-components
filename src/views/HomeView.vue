<template>
  <div>
    <div class="max-w-2xl px-4 py-16 mx-auto space-y-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <!-- search-input component -->
      <search-input @update:search="handleSearch" />

      <Transition name="fade">
        <!-- Component Categories -->
        <div>
          <div v-for="category in filteredCategories" :key="category.name" class="space-y-6">
            <div class="flex justify-center">
              <div class="wrapper">
                <div class="section-title">
                  <span class="text-3xl font-semibold">{{ category.name }}</span>
                </div>
              </div>
            </div>
            <div
              class="grid grid-cols-1 pb-8 mt-6 border-b border-gray-600 dark:border-gray-100 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              <div class="relative group transit" v-for="item in getDisplayItems(category)" :key="item.title">
                <router-link :to="item.route">
                  <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
                    <div class="flex items-center justify-center h-full">
                      <p class="text-2xl font-semibold truncate">{{ item.title }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <Transition name="fade">
        <!-- Optional: No results message -->
        <div v-if="searchQuery && filteredCategories.length === 0"
          class="text-center text-gray-500 py-8 text-3xl font-semibold">
          No Components found for <span class="underline">"{{ searchQuery }}"</span>. 😁
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import searchInput from '@/components/reusable-components/search-input.vue';

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

// Combine arrays into categories (without pre-computed filteredItems)
const categories = ref([
  { name: 'Banners Components', items: banners.value },
  { name: 'Blogs Components', items: blogs.value },
  { name: 'Collections Components', items: collections.value },
  { name: 'Content Components', items: content.value },
  { name: 'Call To Action Components', items: callToAction.value },
  { name: 'FAQ Components', items: faq.value },
  { name: 'Features Components', items: features.value },
  { name: 'Floating Navigation Components', items: floatingNavigation.value },
  { name: 'Footer Components', items: footer.value },
  { name: 'Forms Components', items: forms.value },
  { name: 'Full Page Components', items: fullPage.value },
  { name: 'Gallery Components', items: gallery.value },
  { name: 'Header Components', items: header.value },
  { name: 'Heading Components', items: heading.value },
  { name: 'Hero Components', items: hero.value },
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

const handleSearch = (query: string) => {
  searchQuery.value = query;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>