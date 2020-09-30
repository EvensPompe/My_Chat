<template>
  <div id="home">
    <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Home",
})
export default class Home extends Vue {}
</script>
<style scoped>
#home{
  width: 90%;
  height: 100vh;
  background: black;
  color: white;
}
</style>