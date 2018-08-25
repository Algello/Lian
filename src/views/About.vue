<template>
  <section class="page-about">
      <Heading heading="about the agency" subHeading="welcome to lian" :bg="require(`@/assets/img/about-bg.jpg`)"></Heading>
      <div class="container">
        <div class="about">
            <div class="about__left">
                <img src="../assets/img/about-us.jpg" alt="Our great team">
            </div>
            <div class="about__right">
                <div class="about__top">
                    <h3 class="h3">our story</h3>
                    <p class="par">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
                    <p class="par">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                </div>
                <div class="about__bottom">
                    <h3 class="h3">our skills</h3>
                    <Skills class="about__skill" name="Photoshop" :width="90" :delay="1400"></Skills>
                    <Skills class="about__skill" name="Branding" :width="95" :delay="1600"></Skills>
                    <Skills class="about__skill" name="Photography" :width="50"></Skills>
                    <Skills class="about__skill" name="Web Design" :width="85" :delay="1200"></Skills>
                </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
  import Heading from '@/components/Heading.vue'
  import Skills from '@/components/Skills.vue'
  export default {
      components: {
          Heading,
          Skills
      }
  }
</script>

<style scoped lang="scss">
  @import '../assets/scss/mixins';
  @import '../assets/scss/grid';
  @import '../assets/scss/utilities';
  @import '../assets/scss/typography';

    .about{
        margin-top: 7.8rem;
        display: flex;
        justify-content: center;
        &__left {
            margin-right: 5rem;
            flex: 0 0 47%;
        }
        &__top {
            margin-bottom: 4rem;
        }
        &__skill {
            &:not(:last-child) {
                margin-bottom: 2rem;
            }
        }
        .h3 {
            margin-bottom: 3.5rem;
        }
        .par:not(:last-child) {
            margin-bottom: 4.5rem;
        }
    }

</style>
