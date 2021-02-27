<template>
  <div id="formContact">
    <form @submit.prevent="sendContact">
      <section>
        <div>
          <div>
            <label for="email">Email</label>
          </div>
          <div>
            <input
              type="email"
              v-model="contactData.email"
              id="email"
              required
            />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <label for="message">Message</label>
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
  setup() {
    const contactData = ref({
      email: "",
      message: "",
    });

    const sendContact = () => console.log(contactData.value);
    return { contactData, sendContact };
  },
};
</script>
<style scoped>
#formContact form {
  width: inherit;
  height: 94%;
  display: flex;
  flex-flow: row nowrap;
}

#formContact form section {
  width: 50%;
  height: inherit;
}

#formContact form section:first-child div,
#formContact form section:last-child div div {
  width: 100%;
  height: 50%;
}

#formContact form section:first-child div div:first-child label,
#formContact form section:last-child div div:first-child label {
  font-size: 24px;
}

#formContact form section:first-child div div:last-child input,
#formContact form section:last-child div div:last-child textarea {
  width: 90%;
  height: 30px;
  font-size: 30px;
  background: transparent;
  color: white;
  border: none;
  border-bottom: 2px white solid;
  border-left: 2px white solid;
  cursor: text;
  transition: all 0.3s ease-out;
}

#formContact form section:last-child div div:last-child textarea {
  height: 120px;
  font-size: medium;
}

#formContact form section:first-child div div,
#formContact form section:last-child div div {
  width: inherit;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
}

#formContact form section:last-child div {
  width: 100%;
  height: 50%;
}

#formContact form section:last-child div:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
}

#formContact form section:last-child div:last-child button {
  width: 160px;
  height: 50px;
  font-size: 28px;
  background: black;
  color: white;
  border: white 2px solid;
  border-radius: 4%;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

#formContact form section:last-child div:last-child button:hover {
  background: gray;
}

#formContact form section:last-child div:last-child button:active {
  background: white;
  color: black;
}
</style>