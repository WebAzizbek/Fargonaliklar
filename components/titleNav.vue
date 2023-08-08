<template>
    <div class="title-nav">
        <div class="text-wrapper">
            <h2 class="nav-title">{{ title }}</h2>
            <nuxt-link class="nav-link" to="/seeAll">Барчаси</nuxt-link>
        </div>
    </div>
</template>

<script setup>
const { title } = defineProps({
    title: {
        required: true
    }
})
</script>
