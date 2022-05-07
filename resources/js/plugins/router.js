import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Landing from "../pages/Landing.vue";

const routes = [
    {
        path: "/",
        component: Landing,
    },
];

const opts = {
    mode: "history",
    routes,
};

let router = new VueRouter(opts);

export default router;
