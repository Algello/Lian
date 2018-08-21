<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view/>
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
      components: {
          Navigation,
          Footer
      }
  }
</script>
