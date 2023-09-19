import { createApp } from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import router from './router';
import { useVuelidate } from "@vuelidate/core";
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';


const app = createApp(App);
app.use(Vuelidate);
app.use(useVuelidate);
app.config.productionTip = false;
app.use(router);
app.mount('#app');

export default app;
