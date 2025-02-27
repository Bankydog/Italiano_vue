import { createRouter, createWebHashHistory } from "vue-router";
import Landing from "../pages/Landing.vue";
// import About from "../pages/About.vue";
// import Page1 from "../pages/Page1.vue";
// import Page2 from "../pages/Page2.vue";
// import Page3 from "../pages/Page3.vue";
// import Page4 from "../pages/Page4.vue";

const routes = [
  { path: "/", name: "landing", component: Landing },
  //   { path: "/about", name: "about", component: About },
  //   { path: "/page1", name: "page1", component: Page1 },
  //   { path: "/page2", name: "page2", component: Page2 },
  //   { path: "/page3", name: "page3", component: Page3 },
  //   { path: "/page4", name: "page4", component: Page4 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
