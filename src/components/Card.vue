<template>
    <div class="card">
        <div class="card__photo">
            <img class="card__img" :src="imgSrc" alt="Card photo">
        </div>
        <div class="card__info">
            <div class="card__name">{{name}}</div>
            <div class="card__post">{{post}}</div>
            <div class="card__bio">{{bio}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            imgSrc: {type: String, required: true},
            name: {type: String, required: true},
            post: {type: String, required: true},
            bio: {type: String, required: false, default: 'Lorem ipsum dolor sit amet, conse ctetuer adipi scing elit, sed diam nonu mmy nibh euis mod tinci'},
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/mixins';
    @import '../assets/scss/grid';
    @import '../assets/scss/utilities';
    .card {
        max-width: 36rem;
        @include respond(phone) {
            margin: 0 auto;
        }
        &__img {
            display: block;
            width: 100%;
        }
        &__info {
            background-color: #ffffff;
            padding: 3rem 3.5rem;
            text-align: left;
            @include respond(tab-port) {
                padding: 2rem 2.5rem;
            }
        }
        &__name {
            margin-bottom: 1rem;
            color: #041608;
            font-size: 2.4rem;
            font-weight: 400;
            line-height: 2.4rem;
            text-transform: uppercase;
        }
        &__post {
            margin-bottom: 2rem;
            color: #777;
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 1rem;
        }
        &__bio {
            color: #9c9c9c;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 2.4rem;
        }
    }
</style>