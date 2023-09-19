<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="login"
          type="text"
          v-model="v.login"
          :class="{ invalid: v.login?.$error }"
        />

        <label for="login">Логин</label>

        <small
          class="helper-text invalid"
          v-for="(error, key) in v.login?.$errors"
          :key="key"
        >
          {{ printError(key, error.$params) }}
        </small>
      </div>
      <div class="input-field">
        <input id="password" type="password" v-model="v.password" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>

import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import router from "@/router";

export default {
  name: "LoginForm",
  setup() {
    const v = useVuelidate({
      login: { required, minLength: minLength(3) },
      password: { required, minLength: minLength(6) },
    });

    const submitHandler = () => {
      v.value.$touch();

      if (v.$error) return;

      router.push("/");
    };

    const printError = ($name, $param) => {
      if ($name === "required") {
        return "Поле не должно быть пустым";
      } else if ($name === "minLength") {
        return "Минимальная длина должна быть " + $param + " символов";
      }
    };

    return {
      v,
      submitHandler,
      printError,
    };
  },
};
</script>
