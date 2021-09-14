import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyBI4eon9y1sAhaNymgcmvcSzA7wC-VHZ1U",
    authDomain: "basuke-3cc7b.firebaseapp.com",
    projectId: "basuke-3cc7b",
    storageBucket: "basuke-3cc7b.appspot.com",
    messagingSenderId: "320192139310",
    appId: "1:320192139310:web:eaadc767f519a28451cfbf",
    measurementId: "G-C3ZF1B8ZPP"
};

firebase .initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
