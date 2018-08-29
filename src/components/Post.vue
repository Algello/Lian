<template>
    <div class="post" :style="hoverMode">
        <div class="post__top" v-if="!noImage">
            <img :src="image" class="post__img" alt="post image">
        </div>
        <div class="post__bottom" :class="hoverModeBottom">
            <div class="post__noImage-title" v-if="noImage">{{noImage}}</div>
            <h4 class="post__title" :class="hoverModeOther">{{title}}</h4>
            <div class="post__author" :class="hoverModeOther"><span class="post__author-icon"><font-awesome-icon icon="user"/></span>
                by Jenn Pereira
            </div>
            <p class="post__text" :class="hoverModeOther">
                Proin semper suscipit magna, nec imperdiet lacus semper vitae.
                Sed hendrerit enim non justo posuere placerat eget purus mauris...
            </p>
            <div class="post__info">
                <div class="post__date"><span class="post__calendar"><font-awesome-icon icon="calendar"/></span>
                    on July 19, 2016
                </div>
                <div class="post__share">
                    <span class="post__share-icon" :class="dropdown"
                          @click="dropdownIsVisible = !dropdownIsVisible"><font-awesome-icon icon="share-alt"/></span>
                    <span class="post__share-icon icon-heart" :class="{liked: isLiked}" @click="liked"><font-awesome-icon
                            icon="heart"/></span>
                    <span class="post__likes" :class="{liked: isLiked}">{{likes}}</span>
                    <div class="post__dropdown fadeInDown animated" v-show="dropdownIsVisible">
                        <a @click="dropdownIsVisible = false" v-for="i in 3">Link {{i}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    export default {
        data() {
            return {
                dropdownIsVisible: false,
                likes: 19,
                isLiked: false,
            }
        },
        props: {
            mode: {type: String, required: false, default: 'normal'},
            noImage: {type: String, required: false, default: ''},
            image: {type: String, required: false},
            title: {type: String, required: false, default: 'I am a Blog Post with an Awesome Image'},
        },
        methods: {
            liked() {
                if (this.isLiked === false) {
                    this.isLiked = true;
                    this.likes++;
                } else {
                    this.isLiked = false;
                    this.likes--;
                }

            }
        },
        computed: {
          hoverMode() {
              return {
                  backgroundImage: this.mode === 'hover' ? 'url(' + this.image + ')' : '',
                  backgroundSize: this.mode === 'hover' ? 'cover' : '',
                  backgroundPosition: this.mode === 'hover' ? 'center' : ''
              }
          },
            hoverModeBottom() {
              return {
                  'hover-mode-bottom': this.mode === 'hover'
              }
            },
            hoverModeOther() {
                return {
                    modeHover: this.mode === 'hover'
                }
            },
            dropdown() {
              return {
                  'dropdownIsHover' : this.mode === 'hover',
                  'dropdownIsVisible': this.dropdownIsVisible
              }
            }
        },
        mounted() {
            this.likes = getRandomInt(10, 29);
        }
    }
</script>

<style scoped lang="scss">
    .post {
        max-width: 36rem;
        &__bottom {
            padding: 4rem;
            background-color: #ffffff;
        }
        &__img {
            width: 100%;
            max-height: 25rem;
            display: block;
        }
        &__noImage-title {
            color: white;
            font-size: 1.3rem;
            font-weight: 700;
            line-height: 1.8rem;
            text-transform: uppercase;
            background-color: #000000;
            border-radius: 3px;
            display: inline-block;
            padding: .4rem .9rem;
            margin-bottom: 2.5rem;
        }
        &__title {
            color: #333;
            font-size: 2rem;
            line-height: 3rem;
            margin-bottom: 1.5rem;
        }
        &__author {
            color: #ccc;
            font-size: 1.3rem;
            line-height: 3rem;
            margin-bottom: 3rem;
            transition: color .3s ease-out;
            cursor: default;
            &:hover {
                color: #333;
            }
            &-icon {
                margin-right: .5rem;
                &:hover {
                    color: #333;
                }
            }
        }
        &__text {
            color: #777;
            font-size: 1.4rem;
            line-height: 2.4rem;
            margin-bottom: 4rem;
        }
        &__info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #9a9a9a;
            font-size: 1.3rem;
            font-weight: 400;
            line-height: 2.4rem;
        }
        &__calendar {
            margin-right: .5rem;
            color: #cccccc;
        }
        &__share {
            color: #cccccc;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 2.4rem;
            &-icon {
                transition: color .3s ease-out;
                cursor: pointer;
            }
            &-icon:first-child {
                margin-right: 2rem;
                position: relative;
                &:hover,
                &:active {
                    color: #333;
                }
            }
        }
        &__likes {
            color: #cccccc;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 2.4rem;
            margin-left: .5rem;
            transition: color .3s ease-out;
        }
        .liked {
            color: #F44336;
        }
        .dropdownIsVisible {
            color: #333333;
        }
        .dropdownIsHover {
            color: #ffffff;
            &:hover,
            &:active {
                color: #ffffff;
            }
        }
        .hover-mode-bottom {
            opacity: 0;
            transition: opacity .5s ease-out;
            background-color: rgba(#000000, .8);
            &:hover,
            &:active {
                opacity: 1;
            }
        }
        .modeHover {
            color: #ffffff;
            &:hover,
            &:active {
                color: #ffffff;
            }
        }
        &__dropdown {
            position: absolute;
            background-color: #fafafa;
            min-width: 160px;
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            z-index: 1;
            a {
                color: #333;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
                cursor: pointer;
                transition: all .3s ease-out;
                &:hover {
                    background-color: #f1f1f1;
                }
            }
        }
    }

    .fadeInDown {
        animation-name: fadeInDown;
    }

    .animated {
        -webkit-animation-duration: .5s;
        animation-duration: .5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, -30%, 0);
            transform: translate3d(0, -30%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }
</style>