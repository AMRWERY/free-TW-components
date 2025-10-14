export default [
  {
    path: "/call-to-action-one",
    name: "call-to-action-one",
    component: () =>
      import("@/components/call-to-action/call-to-action-one.vue"),
    meta: { title: "Call To Action One" },
  },
  {
    path: "/call-to-action-two",
    name: "call-to-action-two",
    component: () =>
      import("@/components/call-to-action/call-to-action-two.vue"),
    meta: { title: "Call To Action Two" },
  },
  {
    path: "/call-to-action-three",
    name: "call-to-action-three",
    component: () =>
      import("@/components/call-to-action/call-to-action-three.vue"),
    meta: { title: "Call To Action Three" },
  },
  {
    path: "/call-to-action-four",
    name: "call-to-action-four",
    component: () =>
      import("@/components/call-to-action/call-to-action-four.vue"),
    meta: { title: "Call To Action Four" },
  },
];
