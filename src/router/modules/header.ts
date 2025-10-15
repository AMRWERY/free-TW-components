export default [
  {
    path: "/header-one",
    name: "header-one",
    component: () => import("@/components/header/header-one.vue"),
    meta: { title: "Header One" },
  },
  {
    path: "/header-two",
    name: "header-two",
    component: () => import("@/components/header/header-two.vue"),
    meta: { title: "Header Two" },
  },
];
