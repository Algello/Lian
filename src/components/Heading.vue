<template>
    <div class="heading">
        <div class="heading-wrapper" :style="{'background-image': 'url(' + bg + ')'}">
            <div class="container">
                <div class="text-container">
                    <h2 class="heading-h2">{{heading}}</h2>
                    <h4 class="sub-heading">{{subHeading}}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            bg: {type: String, required: true},
            heading: {type: String, required: true},
            subHeading: {type: String, required: true}
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/grid';
    @import '../assets/scss/utilities';
    @import '../assets/scss/mixins';
    .heading {
        background-color: #f0f0f2;
    }
    .heading-wrapper {
        margin: 0 auto;
        background-size: cover;
        background-position: center;
        height: 35rem;
        @include respond(tab-land) {
            height: 30rem;
        }
        @include respond(tab-port) {
            height: 25rem;
        }
        @include respond(phone) {
            height: 20rem;
        }
    }
    .container {
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .heading-h2 {
        display: inline-block;
        color: white;
        font-size: 4.8rem;
        font-weight: 300;
        line-height: 2.4rem;
        text-transform: uppercase;
        background-color: black;
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
    .sub-heading {
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
</style>