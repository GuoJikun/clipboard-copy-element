<template>
  <div>
    <div>
      <h2>用法一</h2>
      <h1>
        元素本身有value属性(可以通过getAttriubte方法获取)则直接复制value属性的值
      </h1>
      <div>
        <button v-copy @clipboard-copy="test" value="这是通过value属性复制的值">
          通过value属性复制
        </button>
      </div>
    </div>
    <div>
      <h2>用法二</h2>
      <h1>对于 a 标签则直接复制 href 属性的值</h1>
      <div>
        <a v-copy @clipboard-copy="test" href="https://www.baidu.com">
          a 标签则复制 href 属性
        </a>
      </div>
    </div>
    <div>
      <h2>用法三</h2>
      <h1>对于 input 标签则是绑定指令到其他标签然后通过其 for 属性去复制</h1>
      <div>
        <label for="test" v-copy>测试input元素的复制</label>
        <input type="text" value="这是input元素value的值" id="test" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Copy } from "./components/clipboard-copy-element/index";

export default defineComponent({
  name: "App",
  directives: { Copy },
  setup() {
    const test = () => {
      alert(1);
    };
    return { test };
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
