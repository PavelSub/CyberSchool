<template>
  <div>
    <ButtonsChoise :buttonblock="componentinfo.buttonblock" :hideArrowsOnBound="false" @setParrentInfo="setMainInfo"/>
    <br>
    <br>
    <carousel class="story-carousel__slide">
      <slide class="story-carousel__slide" v-for="(slide, idx) in maininfo" :index="idx" :key="idx">
        <div class="slide_main_info">
          <div class="slide_trainer_info_common">
            <div class="slide_trainer_info_left">
              <a :href="slide.trainerurl" >
                <img class="slide_trainer_img" :src="getImgUrl(slide.trainerimg)" alt="">
                <div class="slide_rating">{{ slide.rating }}</div>
                <div class="slide_raitingdescription">{{ slide.ratingdescription }}</div>
              </a>
            </div>
            <div class="slide_trainer_info_rigth">
              <div class="slide_trainer_description">
                <div class="slide_trainer_name">{{ slide.name }}</div>
                <div class="slide_trainer_nickname">{{ slide.nickname }}</div>
                <div class="slide_trainer_surname">{{ slide.surname }}</div>
              </div>
              <hr class="slider_divide_line">
              <div class="slide_trainer_career"> 
                <div class="slide_trainer_work" v-for="(work, i) in slide.career" :index="i" :key="i"> 
                  <div class="slide_trainer_time">{{ work.time }}</div>
                  <div class="slide_trainer_desription">{{ work.description }}</div>
                </div>
              </div>
              <hr class="slider_divide_line">
              <div class="slide_trainer_games"> 
                <div class="slide_trainer_game" v-for="(game, i) in slide.games" :index="i" :key="i"> 
                  <a :href="game.url" class="a_trainer_game">
                    <img class="slide_game_img" :src="getImgUrl(game.gameimg)" :alt="game.gamename">
                    <div class="slide_game_desription">{{ game.description }}</div>
                  </a>
                </div>
              </div>           
            </div>
          </div>
          <br>
          <br>
          <ButtonsBuy :buttons="slide.buybuttons" @getBuyAction="buyAction"/>
        </div>
      </slide>
    </carousel>
  </div> 
</template>

<script>
import { Carousel, Slide } from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'
import  ButtonsChoise from './ButtonsChoise.vue'
import  ButtonsBuy from './ButtonsBuy.vue'

export default ({
  name: "CarousTest",
  data(){
    return {
      componentinfo: JSON.parse(
      '{  "buttonblock": {    "header": "НАШИ ТРЕНЕРА",    "message": "Вашими преподавателями будут лучше PRO-игроки",    "buttons": [      "SHOOTER",      "MOBA",      "RTS",      "BR/MMO",      "FIGHTING"    ]  },  "sections": {    "SHOOTER": [      {        "name": "Вася",        "nickname": "педоФИЛЛ",        "surname": "Пупкин",        "trainerimg": "pedoFill.png",        "trainerurl": "/pedoFill",        "rating": "9999",        "ratingdescription": "набрал очков",        "career": [          {            "time": "2019",            "description": "Играл с хером"          },          {            "time": "2020",            "description": "Играл с жопкой"          },          {            "time": "2021-...",            "description": "Хочет играть с детьми"          }        ],        "games": [          {            "gameimg": "callofduty.png",            "url": "/games/callofduty",            "description": "Call of duty"          },          {            "gameimg": "warface.png",            "url": "/games/warface",            "description": "Warface"          },          {            "gameimg": "csgo.png",            "url": "/games/csgo",            "description": "Counter-Strike"          }        ],        "buybuttons": [          {            "type": "inGroup",            "description": "Записаться в группу",            "price": "175"          },          {            "type": "Personal",            "description": "Индивидуальная тренировка",            "price": "750"          },          {            "type": "Team",            "description": "Тренировка для команды",            "price": "1250"          },          {            "type": "Replay",            "description": "Разбор реплея",            "price": "375"          }        ]      },      {        "name": "Иван",        "nickname": "ДурАКК",        "surname": "Иванов",        "trainerimg": "ivandyrak.png",        "trainerurl": "/ivandyrak",        "rating": "7841",        "ratingdescription": "пропустил очков",        "career": [          {            "time": "2010-2019",            "description": "Лежал на печи"          },          {            "time": "2020-...",            "description": "Перевернулся на бок"          }        ],        "games": [          {            "gameimg": "csgo.png",            "url": "/games/csgo",            "description": "Counter-Strike"          }        ],        "buybuttons": [          {            "type": "inGroup",            "description": "Записаться в группу",            "price": "5000"          },          {            "type": "Personal",            "description": "Индивидуальная тренировка",            "price": "25000"          },          {            "type": "Team",            "description": "Тренировка для команды",            "price": "50000"          },          {            "type": "Replay",            "description": "Разбор реплея",            "price": "10000"          }        ]      }    ],    "MOBA": [      {        "name": "Петя",        "nickname": "педоФИЛЛ",        "surname": "Петушок",        "trainerimg": "petya.png",        "trainerurl": "/petya",        "rating": "7777",        "ratingdescription": "набрал очков",        "career": [          {            "time": "2020",            "description": "Пинал хуи"          },          {            "time": "2021-...",            "description": "Занялся делом"          }        ],        "games": [          {            "gameimg": "callofduty.png",            "url": "/games/callofduty",            "description": "Call of duty"          }        ],        "buybuttons": [          {            "type": "inGroup",            "description": "Записаться в группу",            "price": "175"          },          {            "type": "Personal",            "description": "Индивидуальная тренировка",            "price": "750"          },          {            "type": "Team",            "description": "Тренировка для команды",            "price": "1250"          },          {            "type": "Replay",            "description": "Разбор реплея",            "price": "375"          }        ]      }    ],    "RTS": [      {        "name": "Николай",        "nickname": "ВЖопуДай",        "surname": "Николаев",        "trainerimg": "niko.png",        "trainerurl": "/niko",        "rating": "1000",        "ratingdescription": "сухпайков",        "career": [          {            "time": "2010-2019",            "description": "учился в школе"          },          {            "time": "2020-...",            "description": "выпустился на мусорку"          }        ],        "games": [          {            "gameimg": "csgo.png",            "url": "/games/csgo",            "description": "Counter-Strike"          }        ],        "buybuttons": [          {            "type": "inGroup",            "description": "Записаться в группу",            "price": "5000"          },          {            "type": "Personal",            "description": "Индивидуальная тренировка",            "price": "25000"          },          {            "type": "Team",            "description": "Тренировка для команды",            "price": "50000"          },          {            "type": "Replay",            "description": "Разбор реплея",            "price": "10000"          }        ]      }    ],    "BR/MMO": [      {        "name": "Вася",        "nickname": "педоФИЛЛ",        "surname": "Пупкин",        "trainerimg": "pedoFill.png",        "trainerurl": "/pedoFill",        "rating": "9999",        "ratingdescription": "набрал очков",        "career": [          {            "time": "2019",            "description": "Играл с хером"          },          {            "time": "2020",            "description": "Играл с жопкой"          },          {            "time": "2021-...",            "description": "Хочет играть с детьми"          }        ],        "games": [          {            "gameimg": "callofduty.png",            "url": "/games/callofduty",            "description": "Call of duty"          },          {            "gameimg": "warface.png",            "url": "/games/warface",            "description": "Warface"          },          {            "gameimg": "csgo.png",            "url": "/games/csgo",            "description": "Counter-Strike"          }        ],        "buybuttons": [          {            "type": "inGroup",            "description": "Записаться в группу",            "price": "175"          },          {            "type": "Personal",            "description": "Индивидуальная тренировка",            "price": "750"          },          {            "type": "Team",            "description": "Тренировка для команды",            "price": "1250"          },          {            "type": "Replay",            "description": "Разбор реплея",            "price": "375"          }        ]      },      {        "name": "Николай",        "nickname": "ВЖопуДай",        "surname": "Николаев",        "trainerimg": "ivandyrak.png",        "trainerurl": "/ivandyrak",        "rating": "1000",        "ratingdescription": "сухпайков",        "career": [          {            "time": "2010-2019",            "description": "учился в школе"          },          {            "time": "2020-...",            "description": "выпустился на мусорку"          }        ],        "games": [          {            "gameimg": "csgo.png",            "url": "/games/csgo",            "description": "Counter-Strike"          }        ],        "buybuttons": [          {            "type": "inGroup",            "description": "Записаться в группу",            "price": "5000"          },          {            "type": "Personal",            "description": "Индивидуальная тренировка",            "price": "25000"          },          {            "type": "Team",            "description": "Тренировка для команды",            "price": "50000"          },          {            "type": "Replay",            "description": "Разбор реплея",            "price": "10000"          }        ]      }    ],    "FIGHTING": [      {        "name": "Вася",        "nickname": "педоФИЛЛ",        "surname": "Пупкин",        "trainerimg": "pedoFill.png",         "trainerurl": "/pedoFill",        "rating": "9999",        "ratingdescription": "набрал очков",        "career": [          {            "time": "2019",            "description": "Играл с хером"          },          {            "time": "2020",            "description": "Играл с жопкой"          },          {            "time": "2021-...",            "description": "Хочет играть с детьми"          }        ],        "games": [          {            "gameimg": "callofduty.png",            "url": "/games/callofduty",            "description": "Call of duty"          },          {            "gameimg": "warface.png",            "url": "/games/warface",            "description": "Warface"          },          {            "gameimg": "csgo.png",            "url": "/games/csgo",            "description": "Counter-Strike"          }        ],        "buybuttons": [          {            "type": "inGroup",            "description": "Записаться в группу",            "price": "175"          },          {            "type": "Personal",            "description": "Индивидуальная тренировка",            "price": "750"          },          {            "type": "Team",            "description": "Тренировка для команды",            "price": "1250"          },          {            "type": "Replay",            "description": "Разбор реплея",            "price": "375"          }        ]      },      {        "name": "Иван",        "nickname": "ДурАКК",        "surname": "Иванов",        "trainerimg": "ivandyrak.png",         "trainerurl": "/ivandyrak",        "rating": "7841",        "ratingdescription": "пропустил очков",        "career": [          {            "time": "2010-2019",            "description": "Лежал на печи"          },          {            "time": "2020-...",            "description": "Перевернулся на бок"          }        ],        "games": [          {            "gameimg": "csgo.png",            "url": "/games/csgo",            "description": "Counter-Strike"          }        ],        "buybuttons": [          {            "type": "inGroup",            "description": "Записаться в группу",            "price": "5000"          },          {            "type": "Personal",            "description": "Индивидуальная тренировка",            "price": "25000"          },          {            "type": "Team",            "description": "Тренировка для команды",            "price": "50000"          },          {            "type": "Replay",            "description": "Разбор реплея",            "price": "10000"          }        ]      }    ]  }}'  
      ),
      maininfo: {},
    };
  },
  
  components: {
    Carousel,
    Slide,
    ButtonsChoise,
    ButtonsBuy,
  },

  methods: {
    setMainInfo(info){
      this.maininfo = this.componentinfo.sections[info]; 
    },
    buyAction(type){
      return type; 
    },
    getImgUrl(img) {
      return require(`../assets/${img}`);
    },
  },
  
  created() { 
      this.maininfo = this.componentinfo.buttonblock.buttons.length>0? 
                      this.componentinfo.sections[this.componentinfo.buttonblock.buttons[0]] : {};
  },

});

</script>

<style scoped>
  a { 
    text-decoration: none; /* Отменяем подчеркивание у ссылки */
   } 

  .slide_trainer_img {
    width: 200px;
    border-radius: 50%;
  }

  .slide_trainer_description {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .slide_trainer_info_left {
    width: 30%;
  }
  .slide_trainer_info_right {
    width: 70%;
  }
  .slider_divide_line{
    color: black;
  }
  .slide_trainer_info_common {
    display: flex;
    justify-content: space-between; 
    align-items: center;
  }

  .slide_trainer_games {
    display: flex;
    justify-content: space-between; 
    align-items: center;
  }

  .slide_game_img {
    width: 134px;
  }
  /* @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
  body {
      font-family: 'Lato', sans-serif;
      font-weight: 300;
  }
  .story-carousel .story-carousel__slide {
    height: 200px;
    font-size: 18px;
    color: #fff;
  }
  .story-carousel--colors .story-carousel__slide:nth-child(n+1) {
    background: #2e5c8a;
  }
  .story-carousel--colors .story-carousel__slide:nth-child(2n+1) {
    background: #336699;
  } */
</style>