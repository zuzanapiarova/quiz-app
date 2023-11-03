<script setup>
    //destrcuture the passed props proxy object
    const {quiz} = defineProps(['quiz']);
</script>

<template>   
    <div class="card">
        <img :src="quiz.img" alt="">
        <h2>{{ quiz.name }}</h2>
        <p>{{ quiz.questions.length }} questions</p>
    </div>
</template>

<style>
    .card{
    background-color: rgb(243, 243, 243);
    padding: 10px 20px;
    border-radius: 10px;
    margin: 10px;
    width: 300px;

    }
    .card img{
    border-radius: 6px;
    width: 100%;
    height: auto;
    }
</style>