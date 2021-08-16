<template>
  <modal
    name="Popup"
    classes="popup"
    height="350px"
    width="500px"
    @before-close="close"
  >
    <form @submit.prevent="formSubmit">
      <h3>{{ isSignInForm ? "Войти" : "Зарегистрироваться" }}</h3>
      <label>
        Email
        <input
          type="text"
          class="form-control"
          placeholder="Ваша эл. почта"
          v-model="form.email"
        />
      </label>
      <label>
        Пароль
        <input
          type="password"
          class="form-control"
          placeholder="Ваш пароль"
          v-model="form.password"
        />
      </label>
      <div class="actions">
        <a href="#" @click.prevent="mode = isSignInForm ? 'signUp' : 'signIn'">
          {{ isSignInForm ? "Регистрация" : "Вход" }}
        </a>
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="$emit('close')"
        >
          Отмена
        </button>
        <button type="submit" class="btn btn-dark">Подтвердить</button>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  name: "Popup",

  data() {
    return {
      mode: "signIn",
      form: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  computed: {
    isSignInForm() {
      return this.mode === "signIn";
    },
  },
  mounted() {
    // this.$modal.show("Popup");
  },
  methods: {
    changeUserState() {
      if (this.auth) {
        localStorage.removeItem("auth");
        this.$router.push({ name: "main" });
      } else {
        localStorage.setItem("auth", true);
        this.auth = true;
      }
    },
    close() {
      this.$emit("close");
    },
    formSubmit() {
      if (this.isSignInForm) {
        this.signIn();
      } else {
        this.signUp();
      }
    },
    signIn() {
      this.$load(async () => {
        const data = (
          await this.$api.auth.signIn({
            email: this.form.email,
            password: this.form.password,
          })
        ).data;
        localStorage.setItem("user", JSON.stringify(data));
        this.$store.dispatch("user/setUser", data);
        this.$emit("close");
      });
    },
    signUp() {
      this.$load(async () => {
        const data = (
          await this.$api.auth.signUp({
            email: this.form.email,
            password: this.form.password,
          })
        ).data;
        localStorage.setItem("user", JSON.stringify(data));
        this.$store.dispatch("user/setUser", data);
        this.$emit("close");
      });
    },
  },
};
</script>

<style lang="scss"></style>
