<script setup lang="ts">

</script>

<template>
    <n-flex class="home__container" justify="space-between" algin="center" :wrap="false">
        <div class="home__left">
            <n-gradient-text>
                <h1>Hello, 欢迎来到Trying Page!</h1>
            </n-gradient-text>
            <div style="margin-top: 3rem;">
                <p>我是Trying, 前端开发工程师, 专注前端实践与性能优化 </p>
                <p><strong>用代码构建高效体验, 期待与您碰撞灵感！</strong></p>
            </div>
        </div>
        <div class="home__right">
            <img class="home__right__img" src="@/assets/home.svg" />
        </div>
    </n-flex>

</template>

<style lang="scss" scoped>
.home {
    &__container {
        margin: 0 auto;
        width: 68%;
    }

    &__left {
        padding: 20px;
        flex: 3;
        @include flex(column);
        justify-content: center;
        align-items: center;
        line-height: 3rem;

        h1 {
            font-size: 2.4rem;
        }

        p {
            font-size: 1.2rem;
        }
    }

    &__right {
        flex: 1;
        position: relative;
        @include flex(column);
        justify-content: center;
        align-items: center;

        &__img {
            height: 68%;
            border-radius: 20px;
        }
    }
}
</style>