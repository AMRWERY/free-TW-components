export default [
  {
    path: "/logo-cloud-one",
    name: "logo-cloud-one",
    component: () => import("@/components/logo-cloud/logo-cloud-one.vue"),
    meta: { title: "Logo Cloud One" },
  },
  {
    path: "/logo-cloud-two",
    name: "logo-cloud-two",
    component: () => import("@/components/logo-cloud/logo-cloud-two.vue"),
    meta: { title: "Logo Cloud Two" },
  },
  {
    path: "/logo-cloud-three",
    name: "logo-cloud-three",
    component: () => import("@/components/logo-cloud/logo-cloud-three.vue"),
    meta: { title: "Logo Cloud Three" },
  },
];
