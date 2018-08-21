<template>
    <carousel :per-page="1" :mouse-drag="true" :navigationEnabled="true" :loop="true">
        <slide class="slide">
            <img src="../assets/img/carousel-bg.jpg" alt="carousel background image">
            <div class="slide-text">
                <h2 class="slide-h2">lian creative agency</h2>
                <p class="slide-par">minimal freelance portfolio</p>
            </div>
        </slide>
        <slide class="slide">
            <img src="../assets/img/carousel-bg.jpg" alt="carousel background image">
            <div class="slide-text">
                <h2 class="slide-h2">we love juicy lemons</h2>
                <p class="slide-par">fruits is love</p>
            </div>
        </slide>
        <slide class="slide">
            <img src="../assets/img/carousel-bg.jpg" alt="carousel background image">
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
    .slide {
        position: relative;
    }
    .slide-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
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
    }
    .slide-par {
        color: black;
        letter-spacing: 4px;
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 2.4rem;
        text-transform: uppercase;
    }
    .VueCarousel-navigation-next {
        right: 130px !important;
    }
    .VueCarousel-navigation-prev {
        left: 130px !important;
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
    }
</style>