<template>
  <div id="home" :style="widthChange ?{ width:'70%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)' }:
  { width:'90%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)' }">
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import store from '../store'
export default {
  name:'home',
  setup(){
    const widthChange = computed(()=>{
      return store.state.widthChange
    })

    return { widthChange }
  }
}
</script>
<style scoped>
#home{
  width: 90%;
  height: 100vh;
  background: black;
  color: white;
}
</style>