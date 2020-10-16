<template>
  <div id="home" :style="widthChange ?{ width:'70%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)' }:
  { width:'90%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)' }">
    <section>
      <div>
        <p>Rejoingnez le chat mondial le plus "économique" du web !</p>
      </div>
      <div>
        <div>
          <button @click="goTo('register')">Inscrivez-vous</button>
        </div>
        <div>
          <p>OU</p>
        </div>
        <div>
          <button @click="goTo('login')">Connectez-vous</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import store from '../store'
import router from '../router'
export default {
  name:'Home',
  setup(){
    const widthChange = computed(()=>{
      return store.state.widthChange
    })

    const goTo = (pathValue: string): void =>{
      router.push(pathValue);
    }

    return { widthChange, goTo }
  }
}
</script>
<style scoped>
#home{
  width: 90%;
  height: 100%;
  background: black;
  color: white;
}

#home section{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
}

#home section div{
  width: inherit;
  height: 50%;
}

#home section div:first-child{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

#home section div:first-child p{
  font-size: 34px;
}

#home section div:last-child{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

#home section div:last-child div{
  width: 34%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
}

#home section div:last-child div button{
  width: 160px;
  height: 80px;
  font-size: 28px;
  background: black;
  color:white;
  border: white 2px solid;
  border-radius: 4%;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

#home section div:last-child div button:hover{
  background: gray;
}

#home section div:last-child div button:active{
  background: white;
  color: black;
}
</style>