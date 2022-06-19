import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyATBlT9gMG1iNm6wJe6eIURyPe9GPCoP-o",
  authDomain: "proyectosmartdig.firebaseapp.com",
  projectId: "proyectosmartdig",
  storageBucket: "proyectosmartdig.appspot.com",
  messagingSenderId: "366219590111",
  appId: "1:366219590111:web:16dc388b314fe9cfc5ac6a"
};
// user1@gmail.com 
// 123456

firebase.initializeApp(firebaseConfig);




Vue.config.productionTip = false

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')

