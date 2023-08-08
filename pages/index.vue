<template>
    <Adverb>
        <template v-slot:image>
            <img src="~/assets/img/jpg/adverb.jpg" alt="advertising" width="1330" height="188">
        </template>
    </Adverb>

    <div class="politic">
        <div class="container">
            <div class="text-wrapper">
                <a href="" class="top-title">Сиёсат</a>
                <a href="" class="title">Менга кафолатланган тинчлик керак, биринчи навбатда халқимни ўйлашга мажбурман – Шавкат
                    Мирзиёев</a>
                <p class="text">“Афғонистондаги вазиятни ҳаммамиз кўриб турибмиз. Қўшни танланмайди-ку, қўшнимизда вазият
                    ёмон деб қаергадир кўчиб кета олмаймиз-ку. Бундан 2 йил аввал мен “Толибон” раҳбарият билан музокаралар
                    олиб борганимда ҳамма ҳайрон бўлганди.</p>
                <watch></watch>
            </div>
            <div class="img-wrapper">
                <img src="~/assets/img/jpg/mirziyoyev.jpg" alt="mirziyoyev" width="650" height="461">
            </div>
        </div>
    </div>

    <div class="uzbekistan">
        <div class="container">
            <title-nav title="Ўзбекистон"></title-nav>
            <div class="news">
                <new v-for="item in 8" :key="item"></new>
            </div>
        </div>
    </div>

    <div class="world">
        <div class="container">
            <title-nav title="Жахон"></title-nav>
            <div class="list">
                <div class="box">
                    <div class="img-wrapper">
                        <img src="~/assets/img/jpg/car.jpg" alt="car" width="650" height="461">
                    </div>
                    <a href="" class="title">Дунёдаги энг чиройли гиперкар маълум қилинди</a>
                    <watch></watch>
                </div>
                <div class="text-wrapper">
                    <div class="item">
                        <a href="" class="item-title">Бразилия президенти коронавирусга қарши эмланишдан воз кечди</a>
                        <watch></watch>
                    </div>
                    <div class="item">
                        <a href="" class="item-title">Ливанда намойишчилар ўққа тутилди. Бу ҳақда нималар маълум?</a>
                        <watch></watch>
                    </div>
                    <div class="item">
                        <a href="" class="item-title">Шавкат Мирзиёев МДҲ раҳбарлари кенгашининг юбилей мажлисида иштирок этди</a>
                        <watch></watch>
                    </div>
                    <div class="item">
                        <a href="" class="item-title">Ўзбекистонда қанча бола ковидга қарши эмлангани маълум қилинди</a>
                        <watch></watch>
                    </div>
                    <div class="item">
                        <a href="" class="item-title">15 октябрь — Халқаро қишлоқ аёллари куни. Бу кун ҳақида бизга нималар маълум?
                        </a>
                        <watch></watch>
                    </div>
                    <div class="item">
                        <a href="" class="item-title">Ўзбекистонда қанча бола ковидга қарши эмлангани маълум қилинди</a>
                        <watch></watch>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="sport">
        <div class="container">
            <title-nav title="Спорт"></title-nav>
            <div class="news">
                <new v-for="item in 8" :key="item"></new>
            </div>
        </div>
    </div>

    <Adverb>
        <template v-slot:image>
            <img src="~/assets/img/jpg/adverb-2.jpg" alt="advertising" width="1330" height="188">
        </template>
    </Adverb>

    <div class="vidio">
        <div class="container">
            <div class="item">
                <iframe class="iframe" width="650" height="350" src="https://www.youtube.com/embed/ZEyAs3NWH4A"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
                <NuxtLink to="/worldAbout" class="title">Ердаги «Марс», Европадаги қор, Россияда йўлда ерга кириб кетган машиналар. Кун суратлари</NuxtLink>
                <watch></watch>
            </div>
            <div class="item">
                <iframe class="iframe" width="650" height="350" src="https://www.youtube.com/embed/-uniDD7uxJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <NuxtLink to="/worldAbout" class="title">Ердаги «Марс», Европадаги қор, Россияда йўлда ерга кириб кетган машиналар. Кун суратлари</NuxtLink>
                <watch></watch>
            </div>
        </div>
    </div>
    
</template>

<script setup>
// import watch from '~/components/watch.vue';

// import watch from "~/components/watch.vue";

</script>
