<template>
    <header>

        <transition name="search">
            <div v-if="search" class="top-search">
                <div class="container">
                    <form class="form" action="">
                        <label for="search">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16659 3.66667C6.12902 3.66667 3.66659 6.1291 3.66659 9.16667C3.66659 12.2042 6.12902 14.6667 9.16659 14.6667C12.2042 14.6667 14.6666 12.2042 14.6666 9.16667C14.6666 6.1291 12.2042 3.66667 9.16659 3.66667ZM1.83325 9.16667C1.83325 5.11658 5.1165 1.83333 9.16659 1.83333C13.2167 1.83333 16.4999 5.11658 16.4999 9.16667C16.4999 10.8613 15.9251 12.4217 14.9598 13.6635L19.8981 18.6018C20.2561 18.9598 20.2561 19.5402 19.8981 19.8982C19.5401 20.2562 18.9597 20.2562 18.6017 19.8982L13.6634 14.9599C12.4216 15.9252 10.8612 16.5 9.16659 16.5C5.1165 16.5 1.83325 13.2168 1.83325 9.16667Z" fill="#fff"/>
                            </svg>
                        </label>
                        <input id="search" type="text" placeholder="Қидирув">
                    </form>
                    <svg @click="search = false" class="x-svg" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.7338 5.73397C6.15687 5.3109 6.8428 5.3109 7.26587 5.73397L12.9998 11.4679L18.7338 5.73397C19.1569 5.3109 19.8428 5.3109 20.2659 5.73397C20.6889 6.15704 20.6889 6.84297 20.2659 7.26604L14.5319 13L20.2659 18.734C20.6889 19.157 20.6889 19.843 20.2659 20.266C19.8428 20.6891 19.1569 20.6891 18.7338 20.266L12.9998 14.5321L7.26587 20.266C6.8428 20.6891 6.15687 20.6891 5.7338 20.266C5.31074 19.843 5.31074 19.157 5.7338 18.734L11.4678 13L5.7338 7.26604C5.31074 6.84297 5.31074 6.15704 5.7338 5.73397Z" fill="white"/>
                    </svg>
    
                </div>
            </div>
        </transition>
        <div class="header-top">
            <div class="container">
                <div class="select">
                    <div class="selected-wrapper" @click="store.toggle">
                        <div class="selected">{{ store.current }}</div>
                        <img src="~/assets/img/svg/chevron-down.svg" alt="" width="14" height="14">
                    </div>
                    <transition name="lang">
                        <div v-show="store.isOpen" class="options">
                            <ul v-for="language in store.languages" :key="language">
                                <li @click="store.change($event)">{{ language.language }}</li>
                            </ul>
                        </div>
                    </transition>
                </div>
                <p class="text"> <a target="_blank" href="https://t.me/Fargona24">«Фарғоналикларни»</a> телеграмда кузатинг!</p>
                <div @click="search = true" class="search">
                    <img src="~/assets/img/svg/search.svg" alt="search" width="22" height="22">
                </div>
            </div>
        </div>
        <div class="header-bottom">
            <div class="container">
                <div @click="openMenu = true" class="bars">
                    <img src="~/assets/img/svg/bars.svg" alt="bars" width="26" height="18">
                </div>
                <NuxtLink class="logo-link" to="/">
                    <img src="~/assets/img/svg/logo.svg" alt="logo" width="60" height="60">
                </NuxtLink>
                <ul class="nav">
                    <li v-for="(menu, index) in store.navbarMenus" :key="index" class="item">
                        <NuxtLink :to="menu.url">{{menu.name}}</NuxtLink>
                    </li>
                </ul>
                <div @click="search = true" class="search">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.16659 3.66667C6.12902 3.66667 3.66659 6.1291 3.66659 9.16667C3.66659 12.2042 6.12902 14.6667 9.16659 14.6667C12.2042 14.6667 14.6666 12.2042 14.6666 9.16667C14.6666 6.1291 12.2042 3.66667 9.16659 3.66667ZM1.83325 9.16667C1.83325 5.11658 5.1165 1.83333 9.16659 1.83333C13.2167 1.83333 16.4999 5.11658 16.4999 9.16667C16.4999 10.8613 15.9251 12.4217 14.9598 13.6635L19.8981 18.6018C20.2561 18.9598 20.2561 19.5402 19.8981 19.8982C19.5401 20.2562 18.9597 20.2562 18.6017 19.8982L13.6634 14.9599C12.4216 15.9252 10.8612 16.5 9.16659 16.5C5.1165 16.5 1.83325 13.2168 1.83325 9.16667Z"
                            fill="#fff" />
                    </svg>

                </div>
            </div>
        </div>
        <transition name="menu"> 
            <div v-if="openMenu" class="menu">
                <div class="menu-top">
                    <NuxtLink class="logo-link" to="/">
                        <img src="~/assets/img/svg/logo.svg" alt="logo" width="83" height="83">
                    </NuxtLink>
                    <div class="select">
                    <div class="selected-wrapper" @click="store.toggle">
                        <div class="selected">{{ store.current }}</div>
                        <img src="~/assets/img/svg/chevron-down.svg" alt="" width="14" height="14">
                    </div>
                    <transition name="lang">
                        <div v-show="store.isOpen" class="options">
                            <ul v-for="language in store.languages" :key="language">
                                <li @click="store.change($event)">{{ language.language }}</li>
                            </ul>
                        </div>
                    </transition>
                </div>
    
                    <img @click="openMenu = false" class="close" src="~/assets/img/svg/close.svg" alt="close" width="26" height="26">
                </div>
                <div class="menu-bottom">
                    <div @click="openMenu = false" class="item">
                        <nuxt-link to="/">Ўзбекистон</nuxt-link>
                    </div>
                    <div @click="openMenu = false" class="item">
                        <a href="">Технология</a>
                    </div>
                    <div @click="openMenu = false" class="item">
                        <nuxt-link to="/worldAbout">Жахон</nuxt-link>
                    </div>
                    <div @click="openMenu = false" class="item">
                        <a href="">Фарғона</a>
                    </div>
                    <div @click="openMenu = false" class="item">
                        <a href="">Жамият</a>
                    </div>
                    <div @click="openMenu = false" class="item">
                        <a href="">Сиёсат</a>
                    </div>
                    <div @click="openMenu = false" class="item">
                        <a href="">Муҳокама</a>
                    </div>
                    <div @click="openMenu = false" class="item">
                        <a href="">Спорт</a>
                    </div>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { gsap } from "gsap";
import { ref } from "vue"
import { useStore } from "~~/stores/store";
const store = useStore()
const openMenu = ref(false);
const search = ref(false);


onMounted(() => {
    // gsap.to('.header-top', { duration: 1, x: 100 });  
})


</script>

<style lang="scss">
.lang-enter-active,
.lang-leave-active {
    transition: all 0.5s ease;
    transform: translateY(0);
}

.lang-enter-from,
.lang-leave-to {
    transform: translateY(20%);
    opacity: 0;
}
.menu-enter-active,
.menu-leave-active {
    transition: all 0.5s ease;
    transform: translateX(0);
}

.menu-enter-from,
.menu-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
.search-enter-active,
.search-leave-active {
    transition: all 0.5s ease;
    transform: translateY(0);
}

.search-enter-from,
.search-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>
