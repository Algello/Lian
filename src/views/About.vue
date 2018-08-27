<template>
    <section class="page-about">
        <Heading heading="about the agency" subHeading="welcome to lian"
                 :bg="require(`@/assets/img/about-bg.jpg`)"></Heading>
        <div class="container">
            <div class="about">
                <div class="about__left">
                    
                </div>
                <div class="about__right">
                    <div class="about__top">
                        <h3 class="h3">our story</h3>
                        <p class="par">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
                        <p class="par">
                            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
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
            <div class="team">
                <h2 class="h2">awesome team</h2>
                <p class="par">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
                <div class="team__cards">
                    <div class="team__card">
                        <Card :imgSrc="require(`@/assets/img/person-1-min.jpg`)"
                              name="lian joy"
                              post="CEO/Founder">
                        </Card>
                    </div>
                    <div class="team__card">
                        <Card :imgSrc="require(`@/assets/img/person-2-min.jpg`)"
                              name="albert thanh"
                              post="CEO/Founder">
                        </Card>
                    </div>
                    <div class="team__card">
                        <Card :imgSrc="require(`@/assets/img/person-3-min.jpg`)"
                              name="jenn pereira"
                              post="CEO/Founder">
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Heading from '@/components/Heading.vue'
    import Skills from '@/components/Skills.vue'
    import Card from '@/components/Card.vue'

    export default {
        components: {
            Heading,
            Skills,
            Card
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/mixins';
    @import '../assets/scss/grid';
    @import '../assets/scss/utilities';


    .page-about {
        background-color: #fafafa;
    }
    .about {
        margin-top: 7.8rem;
        display: flex;
        justify-content: center;
        margin-bottom: 9rem;
        @include respond(tab-land) {
            margin-top: 5rem;
            margin-bottom: 5rem;
        }
        @include respond(tab-port) {
            margin-top: 4rem;
            margin-bottom: 4rem;
        }
        @include respond(810) {
            flex-direction: column;
        }
        @include respond(phone) {
            margin-top: 2.5rem;
        }
        &__left {
            margin-right: 5rem;
            background-image: url("../assets/img/about-us.jpg");
            background-position: center;
            background-size: cover;
            width: 100%;
            @include respond(tab-port) {
                margin-right: 1rem;
            }
            @include respond(810) {
                margin-right: 0;
                margin-bottom: 2rem;
                height: 500px;
            }
            @include respond(700) {
                height: 400px;
            }
            @include respond(500) {
                height: 300px;
            }
        }
        &__right {
            @include respond(tab-land) {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }
        &__top {
            margin-bottom: 4rem;
            @include respond(tab-land) {
                margin-bottom: 0;
            }
            @include respond(810) {
                margin-bottom: 2rem;
            }
        }
        &__skill {
            &:not(:last-child) {
                margin-bottom: 2rem;
            }
        }
        .h3 {
            margin-bottom: 3.5rem;
            @include respond(1050) {
                margin-bottom: 2rem;
            }
        }
        .par:not(:last-child) {
            margin-bottom: 4.5rem;
            @include respond(1050) {
                margin-bottom: 3rem;
            }
            @include respond(969) {
                margin-bottom: 2rem;
            }
        }
    }
    .team {
        text-align: center;
        padding-bottom: 7rem;
        @include respond(tab-port) {
            padding-bottom: 4rem;
        }
        @include respond(phone) {
            padding-bottom: 0;
        }
        .h2 {
            margin-bottom: 4rem;
            @include respond(tab-port) {
                margin-bottom: 3.5rem;
                letter-spacing: 9px;
            }
            @include respond(phone) {
                margin-bottom: 2rem;
                letter-spacing: 5px;
            }
        }
        .par {
            max-width: 55%;
            margin: 0 auto 6.8rem;
            @include respond(tab-port) {
                max-width: 100%;
                margin: 0 auto 4rem;
            }
        }
        &__cards {
            @include row-flex();
            @include respond(phone) {
                justify-content: center;
            }
        }
        &__card {
            @include col();
            @include size(4);
            @include respond(phone) {
                @include size(12);
                &:not(:last-child) {
                    margin-bottom: 2rem;
                }
            }
        }
    }

</style>
