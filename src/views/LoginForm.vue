<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <!-- ... -->
    <div class="input-field">
      <input
        id="email"
        type="text"
        v-model="email"
        :class="{ invalid: v.email.$invalid }"
      />

      <label for="email">Логин</label>

      <small
        class="helper-text invalid"
        v-for="(error, index) of v.email.$errors"
        :key="index"
      >
        {{ printError(error.$validator, error.$params) }}
      </small>
    </div>
    <!-- ... -->
  </form>
</template>

<script>
import router from "@/router";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

export default {
  name: "LoginForm",

  setup() {
    const v = useVuelidate({
      email: { email, required },
      password: { required, minLength: minLength(6) },
    });

    const submitHandler = () => {
      v.$touch();

      if (v.$invalid) return;

      router.push("/");
    };

    const printError = ($name, $param) => {
      if ($name === "required") {
        return "Поле не должно быть пустым";
      } else if ($name === "minLength") {
        return "Минимальная длина должна быть " + $param + " символов";
      } else if ($name === "email") {
        return "Неправильный формат email";
      }
    };

    return {
      email: v.email,
      password: v.password,
      submitHandler,
      printError,
    };
  },
};
</script>
