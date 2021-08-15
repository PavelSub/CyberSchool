<template>
  <div class="segment">
    <div class="segment-wrap" v-for="item in segments" :key="item.id">
      <div class="segment-dividerline__gor"></div>
      <div class="segment-sidebar">
        <a class="segment-sidebar__text">{{ item.shortname }}</a>
      </div>

      <div class="segment-main">
        <a :href="item.url" class="segment__a"> {{ item.name }} </a>
        <ul class="segment__sub_ul">
          <li
            class="segment__sub_li"
            v-for="elem in item.subsegments"
            :key="elem.id"
          >
            <a :href="elem.url" class="segment__sub_a">
              <img
                class="segment__sub_img"
                :src="getImgUrl(elem.img)"
                :alt="elem.name"
              />
            </a>
          </li>
        </ul>

        <div class="segment-footer">
          <div class="segment__description">
            {{ item.description }}
          </div>
          <br />
          <span class="segment__startinfo">
            {{ item.startinfo }}
          </span>
          <br />
          <div class="segment__message">
            {{ item.message }}
          </div>
          <div class="segment__buttons">
            <button class="segment-submit segment-submit__note" type="submit">
              Записаться в группу
            </button>
            <button class="segment-submit segment-submit__try" type="submit">
              Бесплатное пробное занятие
            </button>
          </div>
        </div>
      </div>
      <div class="segment-dividerline__gor"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SegmentsList",
  data() {
    return {
      segments: JSON.parse(
        '[    {      "id": 46804554,   "shortname": "SHTR", "name": "ФАКУЛЬТЕТ SHOOTER СПОРТА",      "description": "Shooter (или Стрелялка) – одно из старейших командных направлений в киберспорте. Игрок выступает за одну из противостоящих сторон. Он выбирает персонажа, его навыки, оружие и экипировку. Цель шутера – ликвидировать всех членов команды противника находящихся на локации или захватить вражескую базу.",      "url": "shooter",      "subsegments": [        {          "id": 15487690,     "name": "COUNTER-STRIKE",          "img": "csgo.png",          "url": "/csgo"        },        {          "id": 74096937,          "name": "WARFACE",          "img":  "warface.png",          "url": "/warface"        }      ],      "startinfo": "Старт занятий с 4 сентября",      "message": "Убивай со вкусом"    },    {      "id": 17912447,  "shortname": "MOBA",    "name": "ФАКУЛЬТЕТ MOBA СПОРТА",      "description": "Battle Royale (или сокращённо BR) – один из жанров MMO, представляющий из себя симулятор выживания. Игрок начинает с пустым инвентарём (или минимальным набором вещей). Геймер должен прятаться, искать оружие, создавать кратковременные альянсы, обманывать и уничтожать врагов оставаясь в безопасной зоне. Цель матча – стать последним выжившим на карте.",      "url": "moba",      "subsegments": [        {          "id": 43992680,          "name": "HEROES OF THE STORM",          "img": "HOTA.png",          "url": "/hota"        },        {            "id": 43992665,            "name": "DOTA 2",            "img":  "dota.png",            "url": "/dota"          },        {          "id": 40659227,          "name": "LEAGUE OF LEGENT",          "img": "league.png",          "url": "/lol"        }      ],      "startinfo": "Старт занятий с 10 сентября",      "message": "Унитожай ради забавы"    }  ]'
      ),
    };
  },

  methods: {
    getImgUrl(img) {
      return require(`../assets/${img}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.segment {
  padding-left: 100px;
  padding-right: 100px;
}
.segment-dividerline__gor {
  background: #cc3333;
  height: 1px;
  /* margin-top: 35px; */
  margin-bottom: 35px;
}
.segment__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.segment__sub_ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* text-decoration: none; */
}

.segment__sub_li {
  list-style-type: none;
}

.segment__a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 60px;
  font-family: Arial, Helvetica, sans-serif;
}

.segment__a:hover {
  text-decoration: underline;
}

.segment__sub_a {
  border-radius: 0px;
  padding: 12px;
  background-color: rgba(102, 102, 102, 0.35);
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 13px;
  font-family: "Play", sans-serif;
}

.segment__title {
  margin-top: 40px;
  margin-bottom: 40px;
}

.segment-footer {
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 30px;
}
.segment__description {
  color: rgb(255, 255, 255);
  font-size: 13px;
  font-family: Play, Arial;
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
  text-align: left;
  margin-bottom: 30px;
  /* padding-left: 30px;
  padding-top: 20px; */
}

.segment-wrap {
  display: flex;
  margin-bottom: 55px;
}

.segment-sidebar__text {
  color: rgb(204, 51, 51);
  writing-mode: vertical-lr;
  text-orientation: upright;
  font-size: 50px;
  border-right: 1px solid rgb(204, 51, 51);
  padding-right: 35px;
}

.segment-sidebar__text:hover {
  color: rgb(187, 9, 9);
}

.segment__startinfo {
  box-sizing: border-box;
  font-family: Play;
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
  word-wrap: break-word;
  color: white;
  font-size: 25px;
  letter-spacing: 3px;
  text-align: center;
  background-color: rgba(204, 51, 51, 1);
  margin-bottom: 25px;
  padding: 5px 55px;
}

.segment__message {
  font-family: Play, Arial;
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
  font-size: 16px;
  text-align: center;
  color: rgb(255, 255, 255);
  margin-top: 25px;
  margin-bottom: 35px;
}

.segment-submit {
  -webkit-text-size-adjust: 100%;
  -webkit-print-color-adjust: exact;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  text-decoration: none !important;
  box-sizing: border-box;
  transform: scale(1);
  transition: transform 0.1s ease;
  line-height: 1;
  font-family: Play, Arial;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  background: transparent;
  border-radius: 0;
  border: 2px solid #cc3333;
  color: #ffffff;
  padding: 15px 35px;
}

.segment-submit__note:hover {
  border: 2px solid yellow;
  color: yellow;
}

.segment-submit__try {
  border: 2px solid yellow;
  margin-left: 30px;
}

.segment-submit__try:hover {
  border: 2px solid #cc3333;
  color: #cc3333;
}
</style>
