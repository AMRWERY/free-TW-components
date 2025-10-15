export default [
  {
    path: "/product-grid-one",
    name: "product-grid-one",
    component: () => import("@/components/product-grid/product-grid-one.vue"),
    meta: { title: "Product Grid One" },
  },
  {
    path: "/product-grid-two",
    name: "product-grid-two",
    component: () => import("@/components/product-grid/product-grid-two.vue"),
    meta: { title: "Product Grid Two" },
  },
  {
    path: "/product-grid-three",
    name: "product-grid-three",
    component: () => import("@/components/product-grid/product-grid-three.vue"),
    meta: { title: "Product Grid Three" },
  },
];
