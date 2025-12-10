import { createApp } from 'vue';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import App from './App.vue'

// createApp(App).use(router).mount('#app')
// Création de l'application Vue
const app = createApp(App);
// Montage de l'application dans la balise #app de index.html
createApp(App).mount('#app');
