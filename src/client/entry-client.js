import createApp from "./app"

const { app, store } = createApp()

if (window.__INITIAL__STATE__) {
  console.error("客户端获取的State", window.__INITIAL__STATE__)
  store.replaceState(window.__INITIAL__STATE__)
}

app.mount("#app", true)
