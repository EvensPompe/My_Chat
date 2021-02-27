<template>
  <div id="contact">
    <div>
      <h1>Contact</h1>
    </div>
    <form-contact/>
  </div>
</template>
<script lang="ts">
// import { ref } from "vue";
import FormContact from "../components/FormComponents/FormContact.vue";
export default {
  name: "contact",
  components:{
    FormContact
  }
};
</script>
<style scoped>
#contact {
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  display: flex;
  flex-flow: column nowrap;
}

#contact > div:first-child {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#contact > div:last-child {
  width: 100%;
  height: 80%;
}
</style>