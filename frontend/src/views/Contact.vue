<template>
  <div id="contact">
    <h2>Contact</h2>
    <form @submit.prevent="sendContact">
      <section>
        <div>
          <div>
            <label for="email">Email</label>
          </div>
          <div>
            <input type="email" v-model="contactData.email" id="email" required />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <label for="message">Mot de passe</label>
          </div>
          <div>
            <textarea
              name="message"
              v-model="contactData.message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
        </div>
        <div>
          <button type="submit">Envoyer</button>
        </div>
      </section>
    </form>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "contact",
  setup() {
    const contactData = ref({
      email: "",
      message: ""
    });

    const sendContact = () => console.log(contactData.value)
    return { contactData, sendContact }
  },
};
</script>
<style scoped>
</style>