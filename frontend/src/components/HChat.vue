<template>
  <div id="hChat">
    <div class="title">
      <h1 @click="goTo">My_Chat</h1>
      <h3>Le chat mondial éco +</h3>
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from 'vue';
import store from '../store';
import router from '../router';

export default {
  name: "HChat",
  setup(){
    const titleComp = computed(()=>{
      return store.state.widthChange;
    })
    
    const goTo = () => {
      router.push('/');
    }

    return { titleComp, goTo }
  }
}
</script>
<style scoped>
#hChat{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 150px;
  background: black;
  color: white;
}

.title{
  width: 100%;
  height: inherit;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
}

.title h1{
  font-size: 60px;
  cursor: pointer;
}

@media screen and (min-width: 1281px) {
  
}

@media screen and (min-width: 1025px) and (max-width: 1280px) {
  
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  
}
</style>