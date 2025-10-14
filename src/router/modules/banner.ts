export default [
  {
    path: "/banner-one",
    name: "banner-one",
    component: () => import("@/components/banners/banner-one.vue"),
    meta: { title: "Banner One" },
  },
  {
    path: "/banner-two",
    name: "banner-two",
    component: () => import("@/components/banners/banner-two.vue"),
    meta: { title: "Banner Two" },
  },
];
