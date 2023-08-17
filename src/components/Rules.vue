<template>
  <div class="container">
    <div class="content">
      <h1>Правила</h1>
      <p>Здесь будут правила.</p>
      <router-link class="btn" to="/">Главная</router-link>
    </div>
  </div>
</template>

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
