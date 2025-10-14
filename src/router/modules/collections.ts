export default [
  {
    path: "/collections-one",
    name: "collections-one",
    component: () => import("@/components/collections/collections-one.vue"),
    meta: { title: "Collections One" },
  },
  {
    path: "/collections-two",
    name: "collections-two",
    component: () => import("@/components/collections/collections-two.vue"),
    meta: { title: "Collections Two" },
  },
  {
    path: "/collections-three",
    name: "collections-three",
    component: () => import("@/components/collections/collections-three.vue"),
    meta: { title: "Collections Three" },
  },
];
