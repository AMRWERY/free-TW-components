export default [
  {
    path: "/gallery-one",
    name: "gallery-one",
    component: () => import("@/components/gallery/gallery-one.vue"),
    meta: { title: "Gallery One" },
  },
  {
    path: "/gallery-two",
    name: "gallery-two",
    component: () => import("@/components/gallery/gallery-two.vue"),
    meta: { title: "Gallery Two" },
  },
  {
    path: "/gallery-three",
    name: "gallery-three",
    component: () => import("@/components/gallery/gallery-three.vue"),
    meta: { title: "Gallery Three" },
  },
];
