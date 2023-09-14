import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import dateFilter from '@/filters/date.filter';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

const app = createApp(App);

app.config.productionTip = false;

app.use(router);

app.mount('#app');

app.config.globalProperties.$filters = {
  date: dateFilter,
};

export default app;
