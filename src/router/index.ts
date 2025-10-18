import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { useComponentsStore } from "@/stores/componentsStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:route",
      name: "component-preview",
      component: () => import("@/views/component-preview.vue"),
      beforeEnter: (to, from, next) => {
        const store = useComponentsStore();
        const component = store.getComponentByRoute(to.params.route as string);
        if (component) {
          to.meta.title = `${component.title || component.name}`;
        } else {
          to.meta.title = "Free Tailwind Components";
        }
        next();
      },
    },
  ],

  scrollBehavior() {
    return { top: 0, left: 0, behavior: "instant" };
  },
});

router.afterEach((to) => {
  const titleKey = to.meta.title as string;
  document.title = titleKey || "Free Tailwind Components";
});

export default router;
