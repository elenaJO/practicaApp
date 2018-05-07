//la configuracion inicial 
import Vue from 'vue';
import App from './App.vue'; //imporatndo el componente App
import router from './router';
import './registerServiceWorker';
import mixin from './mixin';
import filter from './filter';

Vue.config.productionTip = false;

Vue.mixin(mixin);
filter(Vue);
//creando nueva aplicacion  de vue 
new Vue({
	router,
	render: h => h(App), //es una funcion de parametro, App es el componente 
}).$mount('#app'); //es el div del index.html

