<template>
    <div id="mChat">
        <router-view/>
    </div>
</template>
<script lang="ts">
import {Vue,Options} from 'vue-class-component';

@Options({
    name: "MChat",
})

export default class MChat extends Vue{

}
</script>
<style scoped>

</style>