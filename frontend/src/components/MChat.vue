<template>
    <div id="mChat">
        <aside-menu :widthchanged="widthsend"/>
        <router-view/>
    </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import asideMenu from './AsideMenu.vue';

@Options({
    name: "MChat",
    props: ["widthsend"],
    components:{
       asideMenu
    }
})

export default class MChat extends Vue{
   
}
</script>
<style scoped>
#mChat{
    width: 100%;
    height: inherit;
    display: flex;
    flex-flow: row nowrap;
    background: black;
}
</style>