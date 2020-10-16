<template>
    <div id="login" :style="widthChange ?{ width:'70%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)' }:
  { width:'90%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)' }">
        <div>
            <h1>Connexion</h1>
        </div>
       <form-login/>
    </div>
</template>
<script lang="ts">
import { computed } from 'vue';
import store from '../store';
import formLogin from '../components/RegisterComponents/FormLogin.vue';
export default{
    name:"Login",
    components:{
      formLogin
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
#login{
    width: 90%;
    height: 100%;
    background: black;
    color: white;
    display: flex;
    flex-flow: column nowrap;
}

#login > div:first-child{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#login > div:last-child{
    width: 100%;
    height: 80%;
}
</style>