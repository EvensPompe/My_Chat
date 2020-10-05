<template>
  <div id="app">
    <h-chat @widthsend="widthsended"/>
    <m-chat :widthsend="widthValue"/>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import hChat from "./components/HChat.vue";
import mChat from "./components/MChat.vue";

export default {
  name:"app",
  components:{
    hChat,
    mChat
  },
  setup(){
    const widthValue = ref(false);
    const widthsended = (data: boolean): void =>{
       widthValue.value = data;
    };
    return { widthsended, widthValue }
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
