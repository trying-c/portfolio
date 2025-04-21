<script setup lang="ts">
defineProps<{ title: { type: string, default: null } }>();
</script>

<template>
    <div class="base__box">
        <div class="base__box__title" v-if="title">
            <h1>{{ title }}</h1>
        </div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.base__box {
    @include flexbox(column);
    width: 100%;
    padding: 0 20px;

    &__title {
        padding: 16px;
    }
}
</style>