import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'roboto-npm-webfont';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSearchPlus, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle, faTwitter, faLinkedin, faDribbble, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch);
library.add(faSearchPlus);
library.add(faBars);
library.add(faFacebookF);
library.add(faGoogle);
library.add(faTwitter);
library.add(faLinkedin);
library.add(faDribbble);
library.add(faInstagram);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
