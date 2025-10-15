export default [
  {
    path: "/hero-one",
    name: "hero-one",
    component: () => import("@/components/hero/hero-one.vue"),
    meta: { title: "Hero One" },
  },
  {
    path: "/hero-two",
    name: "hero-two",
    component: () => import("@/components/hero/hero-two.vue"),
    meta: { title: "Hero Two" },
  },
  {
    path: "/hero-three",
    name: "hero-three",
    component: () => import("@/components/hero/hero-three.vue"),
    meta: { title: "Hero Three" },
  },
  {
    path: "/hero-four",
    name: "hero-four",
    component: () => import("@/components/hero/hero-four.vue"),
    meta: { title: "Hero Four" },
  },
  {
    path: "/hero-five",
    name: "hero-five",
    component: () => import("@/components/hero/hero-five.vue"),
    meta: { title: "Hero Five" },
  },
  {
    path: "/hero-six",
    name: "hero-six",
    component: () => import("@/components/hero/hero-six.vue"),
    meta: { title: "Hero Six" },
  },
  {
    path: "/hero-seven",
    name: "hero-seven",
    component: () => import("@/components/hero/hero-seven.vue"),
    meta: { title: "Hero Seven" },
  },
  {
    path: "/hero-eight",
    name: "hero-eight",
    component: () => import("@/components/hero/hero-eight.vue"),
    meta: { title: "Hero Eight" },
  },
];
