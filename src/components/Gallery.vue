<template>
    <div class="container">
        <div class="gallery-menu">
            <ul class="gallery-menu-wrapper">
                <li class="gallery-menu-item"><a @click="changeState('all')" class="gallery-menu-link">all</a></li>
                <li class="gallery-menu-item"><a @click="changeState('logo')" class="gallery-menu-link">logo</a></li>
                <li class="gallery-menu-item"><a @click="changeState('mobile')" class="gallery-menu-link">mobile app</a></li>
                <li class="gallery-menu-item"><a @click="changeState('wordpress')" class="gallery-menu-link">wordpress</a></li>
                <li class="gallery-menu-item"><a @click="changeState('web')" class="gallery-menu-link">web design</a></li>
                <li class="gallery-menu-item"><a @click="changeState('ui')" class="gallery-menu-link">ui/ux</a></li>
                <li class="gallery-menu-item"><a @click="changeState('branding')" class="gallery-menu-link">branding</a></li>
            </ul>
        </div>

            <transition-group name="list-complete" tag="div" class="gallery">
            <div class="gallery__item list-complete-item" v-for="(image, index) in computedArray" :key="index">
                <div class="img-container">
                    <img :src="image" class="gallery__img" alt="gallery image">
                    <div class="gallery-overlay">
                        <div class="gallery__icon" @click="showModal(image)">
                            <font-awesome-icon icon="search-plus" size="3x" :style="{ color: 'white' }"/>
                        </div>
                    </div>
                </div>
            </div>
            </transition-group>

        <button type="button" class="btn">load more</button>
        <div class="gallery-modal" v-show="modalIsVisible">
            <span class="close" @click="hideModal">&times;</span>
            <img class="gallery-modal__content" :src="currentModalImage">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                state: 'all',
                modalIsVisible: false,
                currentModalImage: ''
            }
        },
        methods:  {
            changeState(prop) {
                this.state = prop;
            },
            showModal(img) {
                this.currentModalImage = img;
                this.modalIsVisible = true;
            },
            hideModal() {
                this.modalIsVisible = false;
            }
        },
        props: {imageSrc: {type: Array, required: true}},
        computed: {
            computedArray() {
                switch(this.state) {
                    case 'all':
                    return this.imageSrc;
                        break;
                    case 'logo':
                        return this.imageSrc.slice(2);
                        break;
                    case 'mobile':
                        return this.imageSrc.slice(1,4);
                        break;
                    case 'wordpress':
                        return this.imageSrc.slice(4,9);
                        break;
                    case 'ui':
                        return this.imageSrc.slice(6);
                        break;
                    case 'web':
                        return this.imageSrc.slice(1,6);
                        break;
                    case 'branding':
                        return this.imageSrc.slice(3,8);
                        break;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/variables';
    @import '../assets/scss/components';
    @import '../assets/scss/mixins';
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
        @include respond(phone) {
            justify-content: space-between;
        }
    }
    .gallery-menu-item {
        transform: skew(-20deg);
        &:not(:last-child) {
            margin-right: 2.3rem;
            border-right: 1px solid #d7d7d7;
            @include respond(phone) {
                border-right: none;
                margin-right: 0;
            }
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
        @include respond(tab-port) {
            padding-right: 1.8rem;
        }
        @include respond(phone) {
            font-size: 1.2rem;
            padding-right: 0;
        }
    }

    .gallery {
        column-count: 3;
        column-gap: 3rem;
        @include respond(tab-port) {
            column-count: 2;
        }
        @include respond(phone) {
            column-count: 1;
        }
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
        cursor: pointer;
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
    .gallery-modal {
        display: flex; /* Hidden by default */
        justify-content: center;
        align-items: center;
        position: fixed; /* Stay in place */
        z-index: 999999; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: hidden; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
    }
    .gallery-modal__content {
        display: block;
        width: 80%;
        max-width: 700px;
        animation-name: zoom;
        animation-duration: 0.6s;
        @include respond(phone) {
            width: 100%;
        }
    }
    .close {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
        &:hover,
        &:focus {
            color: #bbb;
            text-decoration: none;
            cursor: pointer;
        }
    }
    @keyframes zoom {
        from {transform:scale(0)}
        to {transform:scale(1)}
    }
    .list-complete-item {
        transition: all .3s;
    }
    .list-complete-enter, .list-complete-leave-to
        /* .list-complete-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
    .list-complete-leave-active {
        position: absolute;
    }
</style>