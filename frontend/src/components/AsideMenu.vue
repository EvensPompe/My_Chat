<template>
    <div id="asideMenu" :style="widthchanged ? 
    {width:'30%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)'} : 
    {width:'10%',transition: 'all 0.6s cubic-bezier(.22,-0.43,.71,1.95)'}">
    </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
    name:"AsideMenu",
    props:["widthchanged"],
})

export default class AsideMenu extends Vue{

}

</script>
<style scoped>
#asideMenu{
    width: 10%;
    height: inherit;
    background: lightcoral;
}
</style>