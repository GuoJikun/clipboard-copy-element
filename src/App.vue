<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div>
    <label for="test" v-copy>test copy</label>
    <input type="text" value="123" id="test" />
  </div>
  <div>
    <p v-copy @clipboard-copy="test" value="eeee">测试复制指令</p>
  </div>
  <div>
    <input v-copy value="测试复制指333令" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { Copy } from "./components/clipboard-copy-element/index";

export default defineComponent({
  name: "App",
  directives: { Copy },
  components: {
    HelloWorld,
  },
  methods: {
    test() {
      alert(1);
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
