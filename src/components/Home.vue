<template>
  <div class="container">
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
      <button class="btn" @click="changeText">Изменить текст</button>
      <router-link class="btn" to="/rules">Правила</router-link>
    </div>
    <img v-if="showImage" src="ваша_картинка.jpg" alt="Картинка" class="image">
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Добро пожаловать на наш сайт!',
      text: 'Здесь будет ваш текст.',
      showImage: true,
    };
  },
  methods: {
    changeText() {
      this.title = 'Новый заголовок!';
      this.text = 'Текст изменен с помощью кнопки.';
    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  margin-right: 20px;
}
.image {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  flex: 1;
  max-width: 300px;
  margin-top: 10px;
}
.btn {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}
.btn:hover {
  background-color: #2980b9;
}
</style>
