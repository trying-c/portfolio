<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0)
</script>

<template>
    <div>
        <Carousel class="portfolio" v-model="value" loop>
            <CarouselItem>
                <div class="portfolio__item">
                    <a href="https://trying-c.github.io/i-website/">I-WEBSITE</a>
                </div>
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

<style lang="scss" scoped>
.portfolio {

    &__item {
        background: #848dd84b;
        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 100px);
    }
}
</style>