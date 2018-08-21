<template>
    <div class="wrapper">
        <div class="container">
            <div class="nav">
                <router-link tag="div" to="/" class="logo">
                    <img src="../assets/img/logo.png" alt="Our Cool Logo">
                </router-link>
                <nav class="main-nav">
                    <ul class="nav-wrapper">
                        <li class="nav-item">
                            <router-link  to="/" class="nav-link" active-class="nav-active" exact>home</router-link>
                        </li>
                        <li class="nav-item">
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
        methods: {
            expandSearch() {
                this.$refs.search.focus();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/variables';
    .wrapper {
        box-shadow: 1px 1.7px 4.8px 0.3px rgba(0, 0, 0, 0.15);
        position: relative;
        z-index: 100;
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
        transition: color .3s ease-out;
        &:hover,
        &:active {
            color: $color-black;
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
    }
</style>