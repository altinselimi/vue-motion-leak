import { createApp } from "vue";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";
import HelloWorld from "./components/HelloWorld.vue";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
app.use(MotionPlugin);

const routes = [
  { path: "/:id", component: HelloWorld, props: true, name: "TestingLeak" },
  {
    path: "/",
    redirect: "/1"
  }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory("/"),
  routes
});

app.use(router);

app.mount("#app");
