<script setup lang="ts">
import Home from './views/home.vue'
import About from './views/about.vue'
import Portfolio from './views/portfolio.vue'
import { themeOverrides, darkThemeOverrides } from './assets/styles/theme'
import { darkTheme, lightTheme, type GlobalTheme } from 'naive-ui';
import { computed, onBeforeMount, ref, type Ref } from 'vue';

const title: Ref = ref<String>('Trying Page')

const main: Ref = ref<HTMLElement | null>(null)

function onMenuChange(value: string) {
    console.log(value)
    if (main.value) {
        const target = document.getElementById(value)
        if (target) {
            main.value.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            })
        }
    }
}
const menuOptions: Ref = ref([
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'Portfolio',
        key: 'portfolio',
    },
    {
        label: 'About',
        key: 'about',
    }
])

const activeKey: Ref = ref<String>('home')


const theme: Ref<GlobalTheme> = ref(lightTheme);
const themeKey: Ref = ref('light');

const isDark = computed(() => {
    return themeKey.value === 'dark';
})


function toggleTheme() {
    if (themeKey.value === 'light') {
        themeKey.value = 'dark';
        theme.value = darkTheme;
    } else {
        themeKey.value = 'light';
        theme.value = lightTheme;
    }
    localStorage.setItem('themeKey', themeKey.value)
    location.reload();
}

onBeforeMount(() => {
    const storageTheme = localStorage.getItem('themeKey')
    if (storageTheme) {
        themeKey.value = storageTheme
        theme.value = storageTheme === 'dark' ? darkTheme : lightTheme
    } else {
        localStorage.setItem('themeKey', 'light')
    }
})
</script>

<template>
    <n-config-provider class="base__app" :class="{ 'dark-mode': isDark }" :theme="theme"
        :theme-overrides="isDark ? darkThemeOverrides : themeOverrides">

        <n-layout-header bordered class="base__header">
            <div class="base__header__title">
                <n-gradient-text>
                    <span>{{ title }}</span>
                </n-gradient-text>
            </div>
            <div class="base__header__menu">
                <n-menu class="base__header__menu" v-model:value="activeKey" mode="horizontal" :options="menuOptions"
                    @update:value="onMenuChange" />
            </div>
            <div class="base__header__util">
                <!-- <n-button class="base__header__btn" text @click="">English</n-button> -->
                <n-button class="base__header__btn" text @click="toggleTheme">{{ isDark ? '浅色' : '深色' }}</n-button>
            </div>
        </n-layout-header>
        <n-layout-content content-class="base__main" :native-scrollbar="false"
            :content-style="{ height: 'calc(100vh - 60px)' }" ref="main">
            <Home class="base__main__item" id="home" />
            <Portfolio class="base__main__item" id="portfolio" />
            <About class="base__main__item" id="about" />
        </n-layout-content>

        <n-global-style />
    </n-config-provider>
</template>

<style lang="scss" scoped>
.base {
    &__app {
        width: 100%;
        height: 100vh;
        @include flex(column);
    }

    &__header {
        padding: 8px 16px;
        height: 60px;
        width: 100%;

        @include flex();
        align-items: center;


        &__title {
            font-size: 1.2rem;
            font-weight: 600;
        }

        &__menu {
            margin: 0 auto;
        }

        &__btn {
            margin: 0 16px;
            font-weight: 500;
            transition: all 0.3s ease-in-out;
        }
    }

    &__main {
        width: 100%;

        &__item {
            height: 100%;
            padding: 20px;
        }
    }

}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    &.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
}
</style>