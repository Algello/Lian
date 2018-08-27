<template>
    <div class="navigation-wrapper">
        <div class="container">
            <div class="nav">
                <router-link tag="div" to="/" class="logo">
                    <img src="../assets/img/logo.png" alt="Our Cool Logo">
                </router-link>
                <nav class="main-nav">
                        <ul class="nav-wrapper" :class="{responsive: isVisible}">
                            <li class="nav-item" @click="isVisible = false">
                                <router-link  to="/" class="nav-link" active-class="nav-active" exact>home</router-link>
                            </li>
                            <li class="nav-item" @click="isVisible = false">
                                <router-link to="/about" class="nav-link" active-class="nav-active">about</router-link>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">blog</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">contact</a>
                            </li>
                        </ul>
                    <div class="nav-hamburger">
                        <font-awesome-icon icon="bars" @click="toggleMenu"/>
                    </div>
                    <div class="nav-search">
                        <form>
                            <input class="nav-search-input" placeholder="Enter your search term..." value="" name="search" ref="search">
                            <font-awesome-icon icon="search" @click="expandSearch" />
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isVisible: false,
                isFocused: false
            }
        },
        methods: {
            expandSearch() {
                if(this.isFocused === false) {
                    this.$refs.search.focus();
                    this.isFocused = true;
                } else {
                    this.$refs.search.blur();
                    this.isFocused = false;
                }

            },
            toggleMenu() {
                if(this.isFocused === true) {
                    this.$refs.search.blur();
                    this.isFocused = false;
                }
                this.isVisible = !this.isVisible;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/variables';
    @import '../assets/scss/mixins';
    .navigation-wrapper {
        box-shadow: 1px 1.7px 4.8px 0.3px rgba(0, 0, 0, 0.15);
        position: relative;
        z-index: 100;
    }
    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: rgba(#ffffff,.8);
    }
    .logo {
        cursor: pointer;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-wrapper {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        @include respond(phone) {
            display: none;
        }
    }
    .nav-hamburger {
        display: none;
        padding: 3rem 0;
        font-size: 2rem;
        transition: color .3s ease-out;
        cursor: pointer;
        &:hover,
        &:active {
            color: $color-black;
        }
        @include respond(phone) {
            display: block;
        }
    }
    .main-nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .nav-item {
        float: left;
    }
    .nav-link {
        display: block;
        position: relative;
        font-size: 1.4rem;
        color: $color-grey;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        padding: 4rem 0 4rem 4.5rem;
        text-decoration: none;
        transition: color .3s ease-out, border .3s ease-out;
        &:hover,
        &:active {
            color: $color-black;
        }
        @include respond(phone) {
            font-size: 2.5rem;
            padding: 3rem 0;
            border-bottom: 1px solid rgba(#000000, .1);
            position: inherit;
            &:hover,
            &:active {
                border-bottom: 1px solid rgba(#000000, .5);
            }
        }
    }
    .nav-active {
        color: $color-black;
        &::after {
            position: absolute;
            top: 50px;
            right: 56px;
            content: '';
            display: block;
            width: 20px;
            height: 1px;
            background-color: #06060a;
            z-index: 100;
            @include respond(tab-land) {
                top: 46px;
                right: 47px;
                width: 18px;
            }
            @include respond(tab-port) {
                top: 40px;
                right: 42px;
                width: 15px;
            }
            @include respond(phone) {
                display: none;
                position: inherit;
            }
        }
        @include respond(phone) {
            border-bottom: 1px solid rgba(#000000, .5);
        }
    }
    .nav-search {
        margin-left: 4.5rem;
        position: relative;
        top: -2px;
        transition: color .3s ease-out;
        &:hover {
            color: $color-black;
            cursor: pointer;
        }
        @include respond(phone) {
            top: 0;
            font-size: 2rem;
            position: inherit;
        }
    }
    .nav-search-input {
        width: 0;
        font-size: 2rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
        border: none;
        transition: width 0.3s ease-in-out;
        position: absolute;
        top: -30px;
        right: 5.3rem;
        z-index: 200;
        &:focus {
            width: 50rem;
        }
        &,
        &:active {
            outline: none;
        }
        @include respond(tab-port) {
            top: -25px;
        }
        @include respond(phone) {
            padding-top: 2rem;
            padding-bottom: 2rem;
            top: 101%;
            right: 0;
            &:focus {
                width: 100%;
            }
        }
    }
    .responsive {
        @include respond(phone) {
            position: absolute;
            top: 67px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            width: 100%;
            text-align: center;
            z-index: 100;
            background-color: rgba(white, .9);
        }
    }
</style>