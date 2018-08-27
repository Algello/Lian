<template>
    <section class="page-portfolio">
        <Heading heading="latest projects" subHeading="we deliver quality"
                 :bg="require(`@/assets/img/portfolio-bg.jpg`)"></Heading>
        <div class="portfolio">
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
    import Heading from '@/components/Heading.vue'
    import Gallery from '@/components/Gallery.vue'
    export default {
        components: {
            Heading,
            Gallery
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/mixins";
    .portfolio {
        margin-top: 7rem;
        @include respond(phone) {
            margin-top: 2rem;
        }
    }
</style>