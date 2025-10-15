export default [
  {
    path: "/floating-navigation-one",
    name: "floating-navigation-one",
    component: () =>
      import("@/components/floating-navigation/floating-navigation-one.vue"),
    meta: { title: "Floating Navigation One" },
  },
  {
    path: "/floating-navigation-two",
    name: "floating-navigation-two",
    component: () =>
      import("@/components/floating-navigation/floating-navigation-two.vue"),
    meta: { title: "Floating Navigation Two" },
  },
  {
    path: "/floating-navigation-three",
    name: "floating-navigation-three",
    component: () =>
      import("@/components/floating-navigation/floating-navigation-three.vue"),
    meta: { title: "Floating Navigation Three" },
  },
];
