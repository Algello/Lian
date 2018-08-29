<template>
    <section class="page-blog">
        <Heading heading="news about lian" subHeading="latest news & insights"
                 :bg="require(`@/assets/img/blog-bg.jpg`)"></Heading>
        <div class="container">
            <div class="blogs">
                <div class="blog">
                    <Post noImage="wordpress" title="I am a Blog Post Title"></Post>
                </div>
                <div class="blog">
                    <Post :image="require(`@/assets/img/gallery_item-4-min.jpg`)"></Post>
                </div>
                <div class="blog">
                    <Post noImage="image hover" title="I am a Blog Post Title" mode="hover" :image="require(`@/assets/img/single_product.jpg`)"></Post>
                </div>
                <div class="blog">
                    <Post :image="require(`@/assets/img/clock.jpg`)"></Post>
                </div>
                <!--<div class="blog">
                    <div class="videoWrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PfYnvDL0Qcw" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>-->
                <div class="blog">
                    <Post :image="require(`@/assets/img/gallery_item-4-min.jpg`)"></Post>
                </div>
                <div class="blog">
                    <Post noImage="image hover" title="I am a Blog Post Title" mode="hover" :image="require(`@/assets/img/single_product.jpg`)"></Post>
                </div>
                <div class="blog">
                    <Post noImage="wordpress" title="I am a Blog Post Title"></Post>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Heading from '@/components/Heading.vue'
    import Post from '@/components/Post.vue'

    export default {
        components: {
            Heading,
            Post
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/mixins";
    @import '../assets/scss/grid';
    @import '../assets/scss/utilities';

    .blogs {
        column-count: 3;
        column-gap: 3rem;
        @include respond(tab-port) {
            column-count: 2;
        }
        @include respond(phone) {
            column-count: 1;
        }
        margin-top: 7rem;
        @include respond(phone) {
            margin-top: 2rem;
        }
    }
    .blog {
        display: inline-block;
        margin: 0 0 3.5rem;
        width: 100%;
    }
    .videoWrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        padding-top: 25px;
        height: 0;
    }
    .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>