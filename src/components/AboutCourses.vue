<template>
  <div class="aboutcourses">
    <Infoblock :info="courseinfo" />
    <div class="aboutcourses__discipline">
      <h1 class="aboutcourses__h1">{{ courseinfo.program.name }}</h1>
      <div class="aboutcourses__discipline-wrap">
        <p
          class="aboutcourses__p"
          v-for="elem of courseinfo.program.courses"
          :key="elem.id"
        >
          <a :href="elem.url" class="aboutcourses__link">{{ elem.name }} </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Infoblock from "./InfoBlock.vue";

export default {
  name: "AboutCourses",
  components: {
    Infoblock,
  },

  data() {
    return {
      courseinfo: JSON.parse(
        ' {  "id": -89154849,  "header": "о курсах",  "sections": [    {      "id": -13479931,      "value": "2 часа",      "description": "длительность одного урока"    },    {      "id": -39166583,      "value": "18 уроков",      "description": "В образовательном блоке"    }  ],  "program": {    "id": "eiusmod labore sint",    "name": "ДИСЦИПЛИНЫ",    "courses": [      {        "id": 97396273,        "name": "Про киберспорт и прогеймеров",        "url": "velit ipsum commodo eiusmod"      },      {        "id": 39032905,        "name": "Расы и герои",        "url": "ex irure consectetur id"      },{        "id": 39032907,        "name": "Развитие и прокачка",        "url": "ex irure consectetur id"      },{        "id": 39032965,        "name": "Прохождение кампании",        "url": "ex irure consectetur id"      },{        "id": 39032998,        "name": "Прокачка навыков и скиллов",        "url": "ex irure consectetur id"      }    ]  }} '
      ),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  /* box-sizing: border-box; */
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
}
.aboutcourses__value {
  font-family: Play, Arial;
  font-weight: 700;
  font-style: normal;
  line-height: 1.4;
  word-wrap: break-word;
  font-size: 48px;
  text-align: center;
  /* box-sizing: border-box; */
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
}

/* .aboutcourses__discipline-wrap {
  display: flex;
} */

.aboutcourses__discipline-wrap {
  column-width: 40%;
  column-count: 2;
  /* column-gap: 4%; */
  column-rule: aqua;
}

.aboutcourses__link {
  text-decoration: none;
  font-family: Play, Arial;
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
  /* word-wrap: break-word; */
  font-size: 25px;
  letter-spacing: 3px;
  text-align: center;
  /* box-sizing: border-box; */
  color: rgb(255, 255, 255);
}

.aboutcourses__p {
  border: 15px solid #66666659;
  border-collapse: collapse;
}
</style>
