/**
 * createMemoryHistory 内存中的路由
 * 进入会退路由浏览器没有变化
 * 服务端使用
 */

import { createRouter, createMemoryHistory, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import About from "../views/About.vue"

const isSSR = typeof window === "undefined"

const history = isSSR ? createMemoryHistory() : createWebHistory()

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
]

export default function () {
  return createRouter({ history, routes })
}
