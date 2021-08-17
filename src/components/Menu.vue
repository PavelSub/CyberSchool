<template>
    <v-app-bar density="comfortable" >
      <v-app-bar-title class="mr-1 ml-2">Школа киберспорта</v-app-bar-title>
  
      <v-spacer></v-spacer>
      <v-btn class="mr-1 ml-1" :to="`/${key}`" v-for="(value, key) in mainmenu" v-bind:key="key">{{value}}</v-btn>
  
      <v-divider inset vertical></v-divider>
  
      <v-btn
        class="mr-4 ml-5"
        color="primary"
        plain
        to="/login"
      >
        <v-icon left icon="mdi-plus"></v-icon>
        <span>Войти</span>
      </v-btn>
    </v-app-bar>
</template>

<script>

export default {
    data: () => ({
        mainmenu: {"main": "Главная", "faculties": "Факультеты", "trainers": "Тренеры", "games": "Игры", "lectures": "Лекции", "events": "Мероприятия", "about": "О нас"},
    })
}
</script>

<style>

</style>