<template>
  <div>
    <h1 class="about-h1">
      About {{ userinfo.name }} - {{ userinfo.location }}
    </h1>
    <button @click="handleClick">修改状态</button>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { computed } from "vue"
import { useStore } from "vuex"
export default defineComponent({
  name: "About",
  setup() {
    const { getters, commit } = useStore()
    const userinfo = computed(() => getters["demo/getData"])
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    async function fetchData() {
      setTimeout(() => {
        commit("demo/setData", {
          name: "zhourengui..." + Math.random(),
          location: "beijing",
        })
      }, 2000)
    }

    if (typeof window !== "undefined") {
      console.log(userinfo)
      fetchData()
    }

    return {
      userinfo,
      fetchData,
    }
  },
  async serverPrefetch() {
    console.error("只在服务端执行")
    await this.fetchData()
  },
  customPrefetch() {
    console.error("只在服务端执行")
  },
})
</script>

<style scoped>
.about-h1 {
  color: red;
}
</style>