export default [
  {
    path: "/features-one",
    name: "features-one",
    component: () => import("@/components/features/features-one.vue"),
    meta: { title: "Features One" },
  },
  {
    path: "/features-two",
    name: "features-two",
    component: () => import("@/components/features/features-two.vue"),
    meta: { title: "Features Two" },
  },
  {
    path: "/features-three",
    name: "features-three",
    component: () => import("@/components/features/features-three.vue"),
    meta: { title: "Features Three" },
  },
  {
    path: "/features-four",
    name: "features-four",
    component: () => import("@/components/features/features-four.vue"),
    meta: { title: "Features Four" },
  },
  {
    path: "/features-five",
    name: "features-five",
    component: () => import("@/components/features/features-five.vue"),
    meta: { title: "Features Five" },
  },
];
