<script setup>
    import { useRoute } from "vue-router";
    import q from '../data/quizes.json'; 

    const route = useRoute();

    const quiz = q.find(quiz => quiz.id == parseInt(route.params.id));

</script>

<template>
    <div class="container">
        <header>
            <h1>This is a {{quiz.name}} quiz</h1>
        </header>
        <div class="questions__container">
            <div class="question__card" v-for="question in quiz.questions">
                <h2>{{ question.id }}.   {{ question.text }} ?</h2>
                <div class="answers__container">
                    <div class="answer" v-for="answer in question.options">
                        <input type="radio" required>
                        <p>{{ answer.text }}</p>
                        <p>{{ answer.isCorrect ? "V" : "X" }}</p>
                    </div>
                </div>
            </div>   
        </div>
        <p class="progress">Your score is ...</p>
    </div>
</template>

<style scoped>

    .answer{
        display: flex;
        margin-bottom: 10px;
        justify-content: space-between;
        padding: 5px;
        flex-direction: row;
        background-color: rgb(245, 245, 245);
        border-radius: 5px;
        align-items: center;
    }

    h2{
        font-size: 18px;
    }

</style>