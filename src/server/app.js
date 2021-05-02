const Koa = require("koa")
const router = require("./router")
const static = require("koa-static")
const path = require("path")

const app = new Koa()
router(app)
app.use(static(path.resolve(__dirname, "../../dist")))

app.listen(8888)
