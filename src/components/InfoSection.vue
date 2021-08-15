<template>
  <div class="ci__section">
    <ButtonsChoise :buttonblock="componentinfo.buttonblock" @setParrentInfo="setMainInfo"/>
    <div class="ci__info">
      {{maininfo.info}}
      <img class="ci_img" :src="maininfo.img" :alt="maininfo.name">
    </div>
  </div>
</template>

<script>
import  ButtonsChoise from './ButtonsChoise.vue';

export default {
  name: 'InfoSection',
  data() {
    return {
      componentinfo: JSON.parse(
        '{  "buttonblock": {  "header": "ЗАЧЕМ ИДТИ В КИБЕРСПОРТ",  "message": "Ценность статуса PRO игрока с каждым годом возрастает, открывая новые горизонты и перспективы",  "buttons": [ "softskills", "career", "famous", "trips"]  },  "sections":     { "softskills": {        "name": "Soft Skills",        "info": "Вместе с киберспортом наши ученики впитывают развитые коммуникативные, социальные и лидерские качества. Они приобретают опыт работы в команде, участвуют в соревнованиях, действуют в конкурентной среде и учатся адекватно, с холодной головой, оценивать слабые и сильные стороны себя и соперника. Кроме киберспортивных дисциплин учащиеся получают навыки работы со стримминговыми сервисами, маркетинговыми инструментами и каналами, социальными сетями, осваивают графические и видеоредакторы, учатся азам тайм-менеджмента, психологии и администрирования.",        "img": ""      },      "career": {        "name": "Карьера",        "info": "В своём становлении киберспортсмен овладевает множеством видов современной деятельности - от практики в иностранных языках и педагогических навыков, до менеджмента и маркетинга в киберспортивной индустрии. Разносторонний опыт, подчерпнутый во время восхождения к вершине, помогает девушкам и юношам, даже на ранних порах, определиться с тем, чем они захотят заниматься в жизни. Приобретённые практические умения значительно расширят кругозор и позволят найти единомышленников по всему миру. После окончания киберспортивной карьеры, большинство игроков продолжает работать в динамически развивающейся игровой индустрии. Они становятся руководителями организаций, менеджерами, тренерами, комментаторами и ведущими киберспортивных трансляций.",        "img": ""      },      "famous": {        "name": "Известность",        "info": "За киберспортивными трансляциями следят множество поклонников со всего мира. На матчи с участием профессиональных игроков делаются крупные ставки, про них пишут средства массовой информации. На каналы звёзд киберспорта в youtube и twitch подписаны десятки милионов человек. Они выпускают собственный мерч, а армия фанатов с замиранием сердца следит за их достижениями, покупая подписки и делая донаты. Даже после завершения профессональной карьеры PRO-игроки не остаются не у дел. Наша академия киберспорта предлагает трудоустройство лучшим студентам. ",        "img": ""},      "trips": {        "name": "Путешествия",        "info": "Занятие профессиональным киберспортом позволяет посетить большинство стран. Киберспорт (или Компьютерный спорт) признан официальным видом спорта на всех континентах ведущими мировыми держвами - в Китае, Индии, Южной Корее, Франции, ОАЭ, Финляндии, Италии, США и России. Игроки уровня PRO не привязаны к определенной местности. Они путешествуют по различным странам, участвуют в международных турнирах, профильных выставках и других киберспортивных  мероприятиях. Современные оборудование позволяет организовать рабочее место кибрспортсмена как в небольшой студии, так и на пляже. В нашей школе киберспорта не привязаны к местности и можете заниматься откуда угодно.",        "img": ""      }    }}'
        ),
      maininfo: {},
  };
  },
  components: {
    ButtonsChoise,
  },
  methods: {
    setMainInfo(info){
      this.maininfo = this.componentinfo.sections[info];
    },
  },
  
  created() {
      this.maininfo = this.componentinfo.buttonblock.buttons.length>0? 
                      this.componentinfo.sections[this.componentinfo.buttonblock.buttons[0]] : {};
  },

}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ci__section {
  padding-left: 100px;
  padding-right: 100px;
}

.ci__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
}

.ci__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ci__header {
  color: rgb(255, 255, 255);
  font-size: 60px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 37px;
}

.ci__message {
  font-family: Play, Arial;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  line-height: 140%;
  letter-spacing: 3px;
  text-align: center;
  color: #ffffff;
  display: inline-block;
  min-width: 12px;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 37px;
}

.ci__buttonelem {
  box-sizing: border-box;
  font-family: Play, Arial;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 3px;
  color: #ffffff;
  cursor: pointer;
  user-select: none;
  padding: 0 20px;
  margin: 0 18px 0 0;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  position: relative;
  background-color: transparent;
}

.ci__buttonelemactive {
  font-family: Play, Arial;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 3px;
  color: #ffffff;
  cursor: pointer;
  user-select: none;
  padding: 0 20px;
  margin: 0 18px 0 0;
  /* white-space: nowrap; */
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  position: relative;
  background-color: red;
}

.ci__buttonelem:hover {
  background: #e65d4b;
  color: black;
  border: #e65d4b;
}

.ci__buttonelem:visited {
  background: yellow;
  color: black;
  border: #e65d4b;
}

.ci__footer {
  display: flex;
}

.ci__info {
  font-family: Play, Arial;
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
  font-size: 16px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
}
</style>