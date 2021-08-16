<template>
    <v-app-bar density="compact">
      <v-app-bar-title>Кибер школа</v-app-bar-title>
  
      <v-spacer></v-spacer>
      <v-btn :to="`/${key}`" v-for="(value, key) in mainmenu" v-bind:key="key">{{value}}</v-btn>
      <!-- <v-btn :to="`/${item}`" v-for="(item, idx) in items" v-bind:key="idx" text>{{item}}</v-btn> -->
      <!-- <v-btn class="mr-3" text>Help</v-btn> -->
  
      <v-divider inset vertical></v-divider>
  
      <v-btn
        class="mr-4 ml-5"
        color="primary"
        plain
      >
        <v-icon left icon="mdi-handshake-outline"></v-icon>
  
        <span>Войти</span>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        mainmenu: {"main": "Главная", "faculties": "Факультеты", "trainers": "Тренеры", "games": "Игры", "lectures": "Лекции", "about": "О нас"},
    })
}
</script>

<style>

</style>