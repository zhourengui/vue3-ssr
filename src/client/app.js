import { createApp, createSSRApp } from "vue"
import App from "./App.vue"
import createRouter from "./router/index"
import createStore from "./vuex"

export default function () {
  const isSSR = typeof window === "undefined"
  const app = (isSSR ? createSSRApp : createApp)(App)
  const router = createRouter()
  const store = createStore()
  app.use(router).use(store)
  return {
    app,
    router,
    store,
  }
}
