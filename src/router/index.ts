import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const routeModules = import.meta.glob<true, string, RouteRecordRaw[]>(
  "./modules/**/*.ts",
  { eager: true, import: "default" }
);

const modules = Object.values(routeModules).flat();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...modules,
    {
      path: "/",
      name: "home",
      component: HomeView,
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
