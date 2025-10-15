export default [
  {
    path: "/full-page-one",
    name: "full-page-one",
    component: () => import("@/components/full-page/full-page-one.vue"),
    meta: { title: "Full Page One" },
  },
  {
    path: "/full-page-two",
    name: "full-page-two",
    component: () => import("@/components/full-page/full-page-two.vue"),
    meta: { title: "Full Page Two" },
  },
  {
    path: "/full-page-three",
    name: "full-page-three",
    component: () => import("@/components/full-page/full-page-three.vue"),
    meta: { title: "Full Page Three" },
  },
];
