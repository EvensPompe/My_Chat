<template>
    <div id="asideMenu" :style="widthchanged ? 
    {width:'30%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)'} : 
    {width:'10%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)'}">
    </div>
</template>
<script lang="ts">
import { computed, ref } from 'vue';
import store from '../store';

export default {
    name:"AsideMenu",
    // props:{
    //     widthchanged:{
    //         type: Boolean,
    //         required:true
    //     }
    // },
    setup(){
        const widthchanged = computed(()=>{
            return store.state.widthChange
        })

        return { widthchanged }
    }
}

</script>
<style scoped>
#asideMenu{
    width: 10%;
    height: inherit;
    background: lightcoral;
}
</style>