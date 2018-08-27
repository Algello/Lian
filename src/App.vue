<template>
  <div id="app">
    <Navigation></Navigation>
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  @import 'assets/scss/main';
</style>

<script>
  import Navigation from '@/components/Navigation.vue'
  import Footer from '@/components/Footer.vue'

  export default {
      data() {
          return {
              transitionName: 'slide-right'
          }
      },
      components: {
          Navigation,
          Footer
      },
      created() {
          this.$router.beforeEach((to, from, next) => {
              const toDepth = to.meta.pageNumber;
              const fromDepth = from.meta.pageNumber;
              this.transitionName = toDepth > fromDepth ? 'slide-right' : 'slide-left';
              next()
          });
      }
  }
</script>
