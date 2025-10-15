export default [
  {
    path: "/pricing-one",
    name: "pricing-one",
    component: () => import("@/components/pricing/pricing-one.vue"),
    meta: { title: "Pricing One" },
  },
  {
    path: "/pricing-two",
    name: "pricing-two",
    component: () => import("@/components/pricing/pricing-two.vue"),
    meta: { title: "Pricing Two" },
  },
  {
    path: "/pricing-three",
    name: "pricing-three",
    component: () => import("@/components/pricing/pricing-three.vue"),
    meta: { title: "Pricing Three" },
  },
  {
    path: "/pricing-four",
    name: "pricing-four",
    component: () => import("@/components/pricing/pricing-four.vue"),
    meta: { title: "Pricing Four" },
  },
];
