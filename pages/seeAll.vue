<template>
    <div class="seeAll">
        <div class="container">
            <title-nav title="Ўзбекистон"></title-nav>
            <div class="news">
                <new v-for="item in 20" :key="item"></new>
            </div>
            <button class="btn">Яна янгиликлар</button>
        </div>
    </div>
</template>

<script setup>
window.scrollTo({ top: 0 });
</script>

