<script setup lang="ts">
import { Carousel, CarouselItem } from 'view-ui-plus';
import { ref } from 'vue';

const value = ref(0)
</script>

<template>
    <div>
        <Carousel autoplay v-model="value" loop>
            <CarouselItem>
                <div class="portfolio__item">1</div>
            </CarouselItem>
            <CarouselItem>
                <div class="portfolio__item">2</div>
            </CarouselItem>
            <CarouselItem>
                <div class="portfolio__item">3</div>
            </CarouselItem>
            <CarouselItem>
                <div class="portfolio__item">4</div>
            </CarouselItem>
        </Carousel>
    </div>
</template>

<style lang="less" scoped>
.portfolio__item {
    background: #000;
    height: 100%;
}
</style>