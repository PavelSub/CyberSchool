<template>
  <div class="aboutcourses">
    <div v-for="item in infoblocks" :key="item.id">
      <Infoblock :info="item" />
    </div>
  </div>
</template>

<script>
import Infoblock from "./InfoBlock.vue";

export default {
  name: "FirstInfoBlock",
  components: {
    Infoblock,
  },

  data() {
    return {
      infoblocks: JSON.parse(
        '[  {    "id": "minim Lorem fugiat",    "header": "ИЗ ЧЕГО СОСТОИТ ОБУЧЕНИЕ",    "sections": [      {        "id": 79225280,        "value": "DISCORD",        "description": "Теоретический материал и его демонстрация "      },      {        "id": -89384900,        "value": "Лекции",        "description": "Отработка индивидуальных и командных навыков гейминга "      }    ]  },  {    "id": "culpa",    "header": "КАК ПРОВОДЯТСЯ ЗАНЯТИЯ",    "sections": [      {        "id": -43316107,        "value": "Семинары",        "description": "Тренер с помошью трансляции обучает мастерству игры "      },      {        "id": 88027198,        "value": "Чемпионаты",        "description": "Участие во внутренних и внешних киберспортивных соревнованиях"      }    ]  }]'
      ),
    };
  },
};
</script>

<style scoped>
.aboutcourses__h1 {
  font-family: Play, Arial;
  font-weight: 700;
  font-style: normal;
  line-height: 1.4;
  word-wrap: break-word;
  font-size: 60px;
  letter-spacing: 3px;
  text-align: center;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
}
.aboutcourses__wrap {
  display: flex;
  justify-content: space-around;
}
.aboutcourses__div {
  display: flex;
  flex-direction: column;
  background-color: #66666659;
  padding: 10px;
  width: 300px;
}
.aboutcourses__value {
  font-family: Play, Arial;
  font-weight: 700;
  font-style: normal;
  line-height: 1.4;
  word-wrap: break-word;
  font-size: 48px;
  text-align: center;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
}

.aboutcourses__description {
  font-family: Play, Arial;
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
  font-size: 16px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  text-align: center;
}
</style>
