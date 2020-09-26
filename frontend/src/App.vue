<template>
  <div id="app">
    <h-chat/>
    <m-chat/>
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
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
