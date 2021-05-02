import createApp from "./app"

export default () => {
  const { app, router, store } = createApp()
  return {
    app,
    router,
    store,
  }
}
