<script setup lang="ts">
function showAlert() {
    alert('about')
}
</script>

<template>
    <div>
        <n-button type="primary" size="medium" @click="showAlert">关于</n-button>

    </div>
</template>

<style lang="scss" scoped></style>