<template>
    <div id="mChat">
        <aside-menu :widthchanged="widthsend"/>
        <router-view/>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import asideMenu from './AsideMenu.vue';

export default {
    name: "MChat",
    props: {
        widthsend:{
            type:Boolean,
            required:true
        }
    },
    components:{
       asideMenu
    }
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