<template>
    <div id="mChat">
        <router-view/>
    </div>
</template>
<script lang="ts">

export default {
    name: "MChat"
}
</script>
<style scoped>
#mChat{
    width: 100%;
    height: 475px;
    display: flex;
    flex-flow: row nowrap;
    background: black;
}
</style>