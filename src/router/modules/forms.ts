export default [
  {
    path: "/contact-form-one",
    name: "contact-form-one",
    component: () => import("@/components/forms/contact/contact-form-one.vue"),
    meta: { title: "Contat Form One" },
  },
  {
    path: "/auth-form-one",
    name: "auth-form-one",
    component: () => import("@/components/forms/auth/auth-form-one.vue"),
    meta: { title: "Auth Form One" },
  },
];
