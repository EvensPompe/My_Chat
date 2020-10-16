<template>
    <div id="register" :style="widthChange ?{ width:'70%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)' }:
  { width:'90%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)' }">
        <div>
            <h1>Inscription</h1>
        </div>
        <formRegister/>
    </div>
</template>
<script lang="ts">
import { computed } from 'vue';
import store from '../store';
import formRegister from '../components/RegisterComponents/FormRegister.vue';
export default{
    name:"Register",
    components:{
      formRegister
    },
    setup(){
        const widthChange = computed(()=>{
        return store.state.widthChange
        })
        return { widthChange }
    }
}
</script>
<style lang="css" scoped>
#register{
    width: 90%;
    height: 100%;
    background: black;
    color: white;
    display: flex;
    flex-flow: column nowrap;
}

#register > div:first-child{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#register > div:last-child{
    width: 100%;
    height: 80%;
}
</style>