import Vue from 'vue'
import App from './App.vue'
import  router  from './router'
import 'roboto-npm-webfont';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faSearchPlus, faBars, faSpinner, faUser, faCalendar, faShareAlt, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle, faTwitter, faLinkedin, faDribbble, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch);
library.add(faSearchPlus);
library.add(faBars);
library.add(faSpinner);
library.add(faUser);
library.add(faCalendar);
library.add(faShareAlt);
library.add(faHeart);
library.add(faFacebookF);
library.add(faGoogle);
library.add(faTwitter);
library.add(faLinkedin);
library.add(faDribbble);
library.add(faInstagram);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
