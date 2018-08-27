<template>
    <div class="wrapper">
        <img src="../assets/img/logo.png" class="footer-logo" alt="Our Cool Logo">
        <div class="social">
            <div class="icon-wrapper">
                <a href="https://www.facebook.com" target="_blank" class="social-link"><font-awesome-icon :icon="['fab', 'facebook-f']"/></a>
            </div>
            <div class="icon-wrapper">
                <a href="https://www.google.com" target="_blank" class="social-link"><font-awesome-icon :icon="['fab', 'google']"/></a>
            </div>
            <div class="icon-wrapper">
                <a href="https://www.twitter.com" target="_blank" class="social-link"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
            </div>
            <div class="icon-wrapper">
                <a href="https://www.linkedin.com" target="_blank" class="social-link"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
            </div>
            <div class="icon-wrapper">
                <a href="https://www.dribbble.com" target="_blank" class="social-link"><font-awesome-icon :icon="['fab', 'dribbble']"/></a>
            </div>
            <div class="icon-wrapper">
                <a href="https://www.instagram.com" target="_blank" class="social-link"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
            </div>
        </div>
        <div class="copy">© 2016 <span class="bold">Mulitix Theme</span> by ThemeForces. All Rights Reserved But I don't care.</div>
    </div>
</template>

<style scoped lang="scss">
    @import '../assets/scss/mixins';
    .wrapper {
        text-align: center;
        padding: 6.5rem 0 4.5rem 0;
        @include respond(phone) {
            padding: 3.5rem 0 2rem 0;
        }
    }
    .footer-logo {
        margin-bottom: 4.5rem;
        @include respond(phone) {
            margin-bottom: 1rem;
        }
    }
    .social {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
        border-top: 1px solid #ebebeb;
        border-bottom: 1px solid #ebebeb;
        margin-bottom: 3.5rem;
        @include respond(phone) {
            margin-bottom: 1.5rem;
        }
    }
    .icon-wrapper {
        color: #777;
        font-size: 1.4rem;
        &:not(:last-child) {
            margin-right: 5.7rem;
        }
        &:hover .social-link {
            color: black;
        }
    }
    .social-link {
        color: inherit;
        transition: color .3s ease-out;
    }
    .copy {
        color: #9c9c9c;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 2.6rem;
        text-transform: uppercase;
        .bold {
            color: black;
        }
    }
</style>