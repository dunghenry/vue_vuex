import { createApp } from 'vue';
import routes from './routes';
import store from './store';
import App from './App.vue';
import './assets/styles/main.css';
const app = createApp(App);
app.use(routes);
app.use(store);

app.mount('#app');
