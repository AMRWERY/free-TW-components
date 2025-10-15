export default [
  {
    path: "/heading-one",
    name: "heading-one",
    component: () => import("@/components/heading/heading-one.vue"),
    meta: { title: "Heading One" },
  },
  {
    path: "/heading-two",
    name: "heading-two",
    component: () => import("@/components/heading/heading-two.vue"),
    meta: { title: "Heading Two" },
  },
  {
    path: "/heading-three",
    name: "heading-three",
    component: () => import("@/components/heading/heading-three.vue"),
    meta: { title: "Heading Three" },
  },
];
