import demoMudules from "./modules/demo"

import { createStore } from "vuex"

export default function () {
  return createStore({
    modules: { demo: demoMudules() },
  })
}
