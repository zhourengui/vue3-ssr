const Router = require("@koa/router")
const path = require("path")
const fs = require("fs")
const { renderToString } = require("@vue/server-renderer")
const serverBundle = require("../../../dist/server.bundile").default
const template = fs.readFileSync(
  path.resolve(__dirname, "../../../dist/index.html")
)
// 注水、脱水
const renderState = function (state, windowKey) {
  return `<script>window.${windowKey}=${JSON.stringify(state)}</script>`
}
const router = new Router()

module.exports = function (app) {
  router.get(["/", "/about"], async (ctx, next) => {
    const { app: vueInstance, router: vueRouter, store } = serverBundle()
    vueRouter.push(ctx.req.url)

    await vueRouter.isReady()

    let appContent = await renderToString(vueInstance)
    appContent = `<div id="app">${renderState(
      store.state,
      "__INITIAL__STATE__"
    )}${appContent}</div>`
    const html = template.toString().replace(`<div id="app"></div>`, appContent)

    ctx.body = html
  })

  app.use(router.routes()).use(router.allowedMethods())
}
