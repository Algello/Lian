<template>
    <section class="page-home">
        <div class="wrapper">
            <Carousel class="carousel"></Carousel>
            <Gallery :imageSrc="[require(`@/assets/img/gallery_item-4-min.jpg`),
                         require(`@/assets/img/gallery_item-2-min.jpg`),
                         require(`@/assets/img/gallery_item-5-min.jpg`),
                         require(`@/assets/img/gallery_item-6-min.jpg`),
                         require(`@/assets/img/gallery_item-10-min.jpg`),
                         require(`@/assets/img/gallery_item-7-min.jpg`),
                         require(`@/assets/img/gallery_item-9-min.jpg`),
                         require(`@/assets/img/gallery_item-1-min.jpg`),
                         require(`@/assets/img/gallery_item-3-min.jpg`),
                         require(`@/assets/img/gallery_item-8-min.jpg`)
                         ]">
            </Gallery>
        </div>
    </section>
</template>

<script>
    import Carousel from '@/components/Carousel.vue'
    import Gallery from '@/components/Gallery.vue'

    export default {
        components: {
            Carousel,
            Gallery
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/mixins';
    @import '../assets/scss/grid';
    @import '../assets/scss/utilities';

    .page-home {
        background-color: #fafafa;
        @include respond(phone) {
            background-color: #ffffff;
        }
    }

    .carousel {
        margin-bottom: 3.2rem;
    }
</style>

