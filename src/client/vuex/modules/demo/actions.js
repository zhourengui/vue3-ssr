export default {
  setData({ commit }) {
    const payload = {
      name: "zhourengui...",
      location: "beijing",
    }
    commit("setData", payload)
  },
}
