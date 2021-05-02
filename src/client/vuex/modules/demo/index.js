import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"
import createState from "./state"

export default function () {
  return {
    namespaced: true,
    state: createState(),
    mutations,
    actions,
    getters,
  }
}
