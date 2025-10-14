export default [
  {
    path: "/faq-one",
    name: "faq-one",
    component: () => import("@/components/faq/faq-one.vue"),
    meta: { title: "Faq One" },
  },
  {
    path: "/faq-two",
    name: "faq-two",
    component: () => import("@/components/faq/faq-two.vue"),
    meta: { title: "Faq Two" },
  },
  {
    path: "/faq-three",
    name: "faq-three",
    component: () => import("@/components/faq/faq-three.vue"),
    meta: { title: "Faq Three" },
  },
  {
    path: "/faq-four",
    name: "faq-four",
    component: () => import("@/components/faq/faq-four.vue"),
    meta: { title: "Faq Four" },
  },
];
