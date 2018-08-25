<template>
    <carousel :per-page="1" :mouse-drag="true" :navigationEnabled="true" :loop="true">
        <slide class="slide">
            <div class="slide-text">
                <h2 class="slide-h2">lian creative agency</h2>
                <p class="slide-par">minimal freelance portfolio</p>
            </div>
        </slide>
        <slide class="slide">
            <div class="slide-text">
                <h2 class="slide-h2">we love juicy lemons</h2>
                <p class="slide-par">fruits is love</p>
            </div>
        </slide>
        <slide class="slide">
            <div class="slide-text">
                <h2 class="slide-h2">some fancy words</h2>
                <p class="slide-par">wow such clever much cool</p>
            </div>
        </slide>
    </carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        components: {
            Carousel,
            Slide
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/_variables.scss';
    @import '../assets/scss/mixins.scss';
    .slide {
        background-image: url(../assets/img/carousel-bg.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 65rem;
        @include respond(tab-land) {
            height: 50rem;
        }
        @include respond(tab-port) {
            height: 35rem;
        }
        @include respond(phone) {
            height: 25rem;
        }
    }
    .slide-text {
        text-align: center;
    }
    .slide-h2 {
        color: white;
        font-size: 4.8rem;
        font-weight: 300;
        line-height: 2.4rem;
        text-transform: uppercase;
        background-color: $color-black;
        padding: 1.3rem 5rem;
        margin-bottom: 3.5rem;
        @include respond(tab-land) {
            font-size: 3.5rem;
        }
        @include respond(tab-port) {
            font-size: 2.8rem;
            padding: 1.1rem 2.8rem;
        }
    }
    .slide-par {
        color: black;
        letter-spacing: 4px;
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 2.4rem;
        text-transform: uppercase;
        @include respond(tab-port) {
            font-size: 1.5rem;
            letter-spacing: 3px;
        }
    }
    .VueCarousel-navigation-next {
        right: 130px !important;
        @include respond(tab-land) {
            right: 90px !important;
        }
        @include respond(tab-port) {
            right: 70px !important;
        }
        @include respond(phone) {
            right: 45px !important;
        }
    }
    .VueCarousel-navigation-prev {
        left: 130px !important;
        @include respond(tab-land) {
            left: 90px !important;
        }
        @include respond(tab-port) {
            left: 70px !important;
        }
        @include respond(phone) {
            left: 45px !important;
        }
    }
    .VueCarousel-navigation-button {
        border: 1px solid white !important;
        border-radius: 50%;
        padding: 12px !important;
        line-height: 12px;
        color: white !important;
        transition: all .3s ease-out;
        &:hover {
            background-color: $color-black !important;
            border: 1px solid $color-black !important;
        }
    }
    .VueCarousel-navigation--disabled {
        &:hover {
            background-color: transparent !important;
            border: 1px solid white !important;
        }
    }
    .VueCarousel-pagination {
        position: absolute;
        bottom: 55px;
        @include respond(tab-land) {
            bottom: 30px;
        }
        @include respond(tab-port) {
            bottom: 20px;
        }
        @include respond(phone) {
            bottom: 5px;
        }
    }
</style>