<script setup>
import Card from '../components/Card.vue';
import q from '../data/quizes.json';
import { ref, watch } from "vue";
import { RouterView, RouterLink } from 'vue-router';

const quizzes = ref(q);
const search = ref("");

//watch the search state, and anytime the state changes, do this:
watch(search, () => {
  quizzes.value = q.filter(quiz => (
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  ))
})
</script>

<template>
    <div class="container">
      <header>
        <h1>Quizzes</h1>
        <input v-model.trim="search" type="text" placeholder="Search ...">
      </header>
      <div class="card__container">
        <RouterLink :to="`/quiz/${quiz.id}`" v-for="quiz in quizzes" :key="quiz.id"> 
            <Card :quiz="quiz" /> <!--v-for="quiz in quizzes" :key="quiz.id" -->
        </RouterLink>
        <!-- this logic is moved to the component Card and by using props we pass the data from this component to that component to reuse it 
        <div class="card" v-for="quiz in quizzes" :key="quiz.id">
          <img :src="quiz.img">    
          <h2>{{quiz.name}}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>   --> 
      </div>
    </div> 
    
  </template>

<style scoped>

*{

  margin: 0 auto;
}

#app{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
  display: flex;
}
.container{
  width: 1024px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

header{
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  justify-content: start;
  align-items: start;
}

header h1{
  font-weight: bold;
  margin-right: 40px;
}

input{
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.card__container{
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}


</style>
