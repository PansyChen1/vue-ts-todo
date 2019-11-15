<template>
  <div id="app">
    <Header></Header>
    <section>
      <van-cell-group>
        <van-field input-align="center" placeholder="Please input task name" />
      </van-cell-group>
    </section>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "../src/components/Header";
import { SwipeCell, Cell, CellGroup, Field } from "vant";

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
