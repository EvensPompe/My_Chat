<template>
  <div id="formRegister">
    <form @submit.prevent="register">
      <section>
        <div>
          <div>
            <label for="userName">Nom utilisateur</label>
          </div>
          <div>
            <input type="text" v-model="registerData.name" id="userName" required/>
          </div>
        </div>
        <div>
          <div>
            <label for="email">Email</label>
          </div>
          <div>
            <input type="email" v-model="registerData.email" id="email" required/>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <label for="password">Mot de passe</label>
          </div>
          <div>
            <input type="password" v-model="registerData.password" id="password" required />
          </div>
        </div>
        <div>
          <div>
            <label for="confPassword">Confirmer votre mot de passe</label>
          </div>
          <div>
            <input
              type="password"
              v-model="registerData.confPassword"
              id="confPassword"
              required
            />
          </div>
        </div>
        <div>
          <div>
            <label for="country">Pays</label>
          </div>
          <div>
            <input type="country" v-model="registerData.country" id="country" required/>
          </div>
        </div>
        <div>
          <button type="submit">S'inscrire</button>
        </div>
      </section>
    </form>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "FormRegister",
  setup() {
    const store = useStore();

    const registerData = ref({
        name:"",
        email:"",
        password:"",
        confPassword:"",
        country:""
    });

    const register = () => {
      store.dispatch("register", registerData.value);
    };

    return { registerData, register };
  },
};
</script>
<style scoped>
#formRegister {
  width: 100%;
  height: 100%;
}

#formRegister form {
  width: inherit;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}

#formRegister form section {
  width: 50%;
  height: inherit;
}

#formRegister form section:first-child div,
#formRegister form section:last-child div div {
  width: 100%;
  height: 50%;
}

#formRegister form section:first-child div div,
#formRegister form section:last-child div div {
  width: inherit;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
}

#formRegister form section:first-child div div:first-child label,
#formRegister form section:last-child div div:first-child label {
  font-size: 24px;
}

#formRegister form section:first-child div div:last-child input,
#formRegister form section:last-child div div:last-child input {
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

#formRegister form section:first-child div div:last-child input:hover,
#formRegister form section:last-child div div:last-child input:hover {
  color: white;
  background: gray;
  border: none;
  border-top: 2px white solid;
  border-right: 2px white solid;
}

#formRegister form section:last-child div {
  width: 100%;
  height: 25%;
}

#formRegister form section:last-child div:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
}

#formRegister form section:last-child div:last-child button {
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

#formRegister form section:last-child div:last-child button:hover {
  background: gray;
}

#formRegister form section:last-child div:last-child button:active {
  background: white;
  color: black;
}
</style>