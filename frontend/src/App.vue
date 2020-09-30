<template>
  <div id="app">
    <h-chat @widthsend="widthSended"/>
    <m-chat :widthsend="widthValue"/>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import hChat from "./components/HChat.vue";
import mChat from "./components/MChat.vue";

@Options({
  name:"app",
  components:{
    hChat,
    mChat
  }
})
export default class App extends Vue {
  widthValue = false;

  public widthSended(bool: any): void{
    this.widthValue = bool;
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
