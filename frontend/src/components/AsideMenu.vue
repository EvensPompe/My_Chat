<template>
    <div id="asideMenu" :style="widthchanged ? 
    {width:'30%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)'} : 
    {width:'10%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)'}">
    <menu-chat/>
    <div class="ctnOptions">
        <div class="option" id="register" @click="goTo('register')">
            <h2>S'incrire</h2>
            <p v-show="widthchanged">Inscrivez-vous, c'est gratuit !</p>
        </div>
        <div class="option" id="login" @click="goTo('login')">
            <h2>Se connecter</h2>
            <p v-show="widthchanged">Connectez-vous, c'est gratuit !</p>
        </div>
        <div class="option" id="about" @click="goTo('about')">
            <h2>À propos</h2>
           <p v-show="widthchanged">Regardez, c'est gratuit !</p>
        </div>
        <div class="option" id="contact" @click="goTo('contact')">
            <h2>Contact</h2>
            <p v-show="widthchanged">Contactez-nous, c'est gratuit !</p>
        </div>
    </div>
    </div>
</template>
<script lang="ts">
import { computed } from 'vue';
import store from '../store';
import menuChat from '../components/MenuChat.vue'
import router from '../router';

export default {
    name:"AsideMenu",
    components:{
        menuChat
    },
    setup(){
        const widthchanged = computed(()=>{
            return store.state.widthChange
        })

    const goTo = (pathValue: string): void =>{
      router.push(pathValue);
    }
        return { widthchanged, goTo }
    }
}

</script>
<style scoped>
#asideMenu{
    width: 10%;
    height: inherit;
    background: lightcoral;
}

.ctnOptions{
    width: 100%;
    height: 90%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
}

.option{
    width: inherit;
    height: 25%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: .4s;
}

.option:hover{
    background: rgb(242, 169, 169);
}

.option p{
    opacity: 0;
}

.option:hover p{
    opacity: 1;
}

.option:active{
    background: rgba(242, 169, 169,.7);
}
</style>