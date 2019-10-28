import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZjQF33i1wB-0GIcPGjXRUB4IKhZqFOqg",
  authDomain: "vuecalendario.firebaseapp.com",
  databaseURL: "https://vuecalendario.firebaseio.com",
  projectId: "vuecalendario",
  storageBucket: "vuecalendario.appspot.com",
  messagingSenderId: "565642021770",
  appId: "1:565642021770:web:dec2c07240ef19e1165673"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
