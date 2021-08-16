<template>
  <div class="nav">
    <div class="nav-wrapper">
      <div class="nav-left">
        <div class="nav-left__div">
          <a href="#" class="nav-left__link">
            <svg
              width="32px"
              height="32px"
              aria-hidden="false"
              fill="none"
              viewBox="0 0 32 32"
            >
              <rect
                x="12.5%"
                y="24%"
                width="75%"
                height="2"
                fill="white"
              ></rect>
              <rect
                x="12.5%"
                y="46%"
                width="75%"
                height="2"
                fill="white"
              ></rect>
              <rect
                x="12.5%"
                y="68%"
                width="75%"
                height="2"
                fill="white"
              ></rect>
            </svg>
          </a>
        </div>

        <a href="#" class="logo">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="350px"
            height="63px"
            viewBox="0 0 350 63"
            enable-background="new 0 0 350 63"
            xml:space="preserve"
          >
            <image
              id="image0"
              width="350"
              height="63"
              x="0"
              y="0"
              xlink:href="data:image/png;base64,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"
            />
          </svg>
        </a>
      </div>

      <div class="nav-right">
        <ul class="nav-right__list">
          <li
            class="nav-right__li"
            v-for="item in menu.contacts"
            :key="item.id"
          >
            <a :href="item.url" class="nav-right__link">
              <span class="nav-right__text">
                <!-- <svg>{{ item.icon }}</svg> -->
              </span>
            </a>
            <a :href="item.url" class="nav-right__link">
              <span class="nav-right__text"> {{ item.value }}</span>
            </a>
          </li>
        </ul>
        <button type="button" class="nav-login" @click="onAuthBtnClick">
          {{ getUser ? "Выйти" : "Войти" }}
        </button>
      </div>
    </div>
    <div class="nav-dividerline"></div>
    <div class="nav-menu">
      <div class="nav-menu__wrap">
        <ul class="nav-menu__list">
          <li class="nav-menu__li" v-for="item in menu.list" :key="item.id">
            <a :href="item.url" class="nav-menu__link">
              <span class="nav-menu__text"> {{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="nav-dividerline"></div>
    <popup v-if="isAuthModalOpen" @close="isAuthModalOpen = false" />
  </div>
</template>

<script>
import Popup from "./Popup";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Nav",
  components: { Popup },
  data() {
    return {
      isAuthorized: false,
      isAuthModalOpen: false,
      menu: JSON.parse(
        '{"list":[{"id": 7236059,"name": "Главная","icon": "","url": "/cybers"},{ "id": 95287162, "name": "Программы обучения", "icon": "", "url": "/programms" },{"id": 95287168, "name": "Тренеры", "icon": "", "url": "/trainers"}],"contacts":[{"id": 7236059, "name": "Телефон", "icon": "", "value": "89252018847"},{"id": 7236099,"name": "Почта", "icon": "", "value": "89252018847"}]}'
      ),
    };
  },
  computed: {
    ...mapGetters({
      getUser: "users/getUser",
    }),
  },
  created() {
    this.setUser(JSON.parse(localStorage.getItem("user")));
  },

  methods: {
    ...mapActions({
      setUser: "users/setUser",
      deleteUser: "users/deleteUser",
    }),
    onAuthBtnClick() {
      if (this.getUser) {
        this.$api.auth.logout();
        localStorage.removeItem("user");
        this.deleteUser();
        this.$router.push({ name: "main" });
      } else {
        this.isAuthModalOpen = true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  padding: 16px 0px;
  font-size: 16px;

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .nav-left {
    display: flex;

    .nav-left__div {
      max-height: 62px;
      display: flex;
      align-items: center;
    }
  }

  .nav-right {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-right__text {
      color: #ffffff;
      font: 16px;
    }
  }
  .nav-right__list {
    display: flex;
  }
  .nav-right__li {
    list-style-type: none;
    margin-left: 20px;
    margin-right: 20px;
  }
  .nav-right__link {
    text-decoration: none;
    cursor: pointer;
    background-color: #66666659;
    // padding: 15px 25px;

    .nav-right__padding {
      padding: 15px 25px;
    }

    .nav-left__link {
      padding: 15px 25px;
      cursor: pointer;
      background-color: #66666659;
    }
  }

  .nav-login {
    // padding: 16px 0px;
    font-size: 16px;
    line-height: 22px;
    border-radius: 5px;
  }

  .nav-menu {
    padding: 12px;
    background-color: rgba(102, 102, 102, 0.35);

    .nav-menu__list {
      display: flex;
      justify-content: space-between;
    }

    .nav-menu__li {
      list-style-type: none;
    }

    .nav-menu__link {
      padding: 15px 25px;
      background-color: #66666659;
      text-decoration: none;
    }

    .nav-menu__text {
      color: #ffffff;
      font: 16px;
    }
  }

  .nav-dividerline {
    background: #cc3333;
    height: 1px;
    margin-top: 35px;
    margin-bottom: 35px;
  }
}
</style>
