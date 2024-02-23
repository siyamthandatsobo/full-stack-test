import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';

// Import Bootstrap JavaScript (including Popper.js and jQuery, if needed)
import 'bootstrap/dist/js/bootstrap.bundle';
createApp(App).use(store).use(router).mount('#app')
