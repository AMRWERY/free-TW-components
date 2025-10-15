export default [
  {
    path: "/product-details-one",
    name: "product-details-one",
    component: () =>
      import("@/components/product-details/product-details-one.vue"),
    meta: { title: "Product Details One" },
  },
  {
    path: "/product-details-two",
    name: "product-details-two",
    component: () =>
      import("@/components/product-details/product-details-two.vue"),
    meta: { title: "Product Details Two" },
  },
];
