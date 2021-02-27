<template>
    <div id="about">
        <h2>My_Chat est un chat "fait-maison"</h2>
        <h3>Développé en Typescript, Node.js et Vue.js.</h3>
        <h6>Evens Pompe</h6>
    </div>
</template>
<script lang="ts">

export default {
    name:"About",
}
</script>
<style scoped>
#about{
    color: white;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-content: flex-start;
}

</style>