export default [
  {
    path: "/newsletter-one",
    name: "newsletter-one",
    component: () => import("@/components/newsletter/newsletter-one.vue"),
    meta: { title: "Newsletter One" },
  },
  {
    path: "/newsletter-two",
    name: "newsletter-two",
    component: () => import("@/components/newsletter/newsletter-two.vue"),
    meta: { title: "Newsletter Two" },
  },
  {
    path: "/newsletter-three",
    name: "newsletter-three",
    component: () => import("@/components/newsletter/newsletter-three.vue"),
    meta: { title: "Newsletter Three" },
  },
];
