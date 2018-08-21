<template>
    <div class="container">
        <div class="gallery-menu">
            <ul class="gallery-menu-wrapper">
                <li class="gallery-menu-item"><a class="gallery-menu-link">all</a></li>
                <li class="gallery-menu-item"><a class="gallery-menu-link">logo</a></li>
                <li class="gallery-menu-item"><a class="gallery-menu-link">mobile app</a></li>
                <li class="gallery-menu-item"><a class="gallery-menu-link">wordpress</a></li>
                <li class="gallery-menu-item"><a class="gallery-menu-link">web design</a></li>
                <li class="gallery-menu-item"><a class="gallery-menu-link">ui/ux</a></li>
                <li class="gallery-menu-item"><a class="gallery-menu-link">branding</a></li>
            </ul>
        </div>
        <div class="gallery">
            <div class="gallery__item" v-for="image in imageSrc">
                <div class="img-container">
                    <img :src="image" class="gallery__img" alt="gallery image">
                    <div class="gallery-overlay">
                        <div class="gallery__icon">
                            <font-awesome-icon icon="search-plus" size="3x" :style="{ color: 'white' }"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button type="button" class="btn">load more</button>
    </div>
</template>

<script>
    export default {
        props: {imageSrc: {type: Array, required: true}}
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/variables';
    @import '../assets/scss/components';
    .container {
        text-align: center;
        padding-bottom: 7rem;
    }
    .gallery-menu-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #e1e1e1;
        border-top: 1px solid #e1e1e1;
        padding: 1.5rem 0;
        margin-bottom: 3rem;
    }
    .gallery-menu-item {
        transform: skew(-20deg);
        &:not(:last-child) {
            margin-right: 2.3rem;
            border-right: 1px solid #d7d7d7;
        }
    }
    .gallery-menu-link {
        display: block;
        color: $color-grey;
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 2.4rem;
        text-transform: uppercase;
        cursor: pointer;
        transition: color .3s ease-out;
        padding-right: 2.3rem;
        transform: skew(20deg);
        &:hover,
        &:active {
            color: $color-black;
        }
    }

    .gallery {
        column-count: 3;
        column-gap: 3rem;
    }
    .img-container {
        position: relative;
    }
    .gallery__item {
        background-color: #eee;
        display: inline-block;
        margin: 0 0 3.5rem;
        width: 100%;
    }
    .gallery__img {
        transition: .5s ease;
    }
    .gallery-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: rgba($color-black, .4);
    }
    .gallery__icon {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
    }
    .img-container:hover .gallery-overlay {
        opacity: 1;
    }
    .img-container:hover .gallery__img {
        opacity: 1;
    }
    .btn {
        @include btn();
        background-color: #959595;
        border-radius: 2px;
        color: white;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.3rem;
        padding: .55rem 2.27735rem;
        cursor: pointer;
        &:hover {
            background-color: darken(#959595, 5);
        }
        &:focus {
            outline: none;
        }
    }
</style>