export default [
  {
    path: "/blogs-one",
    name: "blogs-one",
    component: () => import("@/components/blogs/blogs-one.vue"),
    meta: { title: "Blogs One" },
  },
  {
    path: "/blogs-two",
    name: "blogs-two",
    component: () => import("@/components/blogs/blogs-two.vue"),
    meta: { title: "Blogs Two" },
  },
  {
    path: "/blogs-three",
    name: "blogs-three",
    component: () => import("@/components/blogs/blogs-three.vue"),
    meta: { title: "Blogs Three" },
  },
  {
    path: "/blogs-four",
    name: "blogs-four",
    component: () => import("@/components/blogs/blogs-four.vue"),
    meta: { title: "Blogs Four" },
  },
];
