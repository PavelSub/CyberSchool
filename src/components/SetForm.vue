<template>
  <div class="form-section">
    <h1 class="form-section__title">ПОПРОБУЙ СЕБЯ В КИБЕРСПОРТЕ</h1>
    <form action="submit" method="get" class="form-section__form">
      <!-- <div class="form-section__form-wrap"> -->
      <div class="form-section__part">
        <div class="form-section__input_wrap">
          <input
            class="form-section__input"
            type="text"
            placeholder="Имя*"
            max="30"
            v-model.trim="getName"
            @blur="isNameTouched = true"
          />
          <div class="form-section__span-wrap">
            <span
              :class="{ 'form-section__span-error': isNameError }"
              v-if="isNameError"
              >Введите в правильной форме</span
            >
            <span
              :class="{ 'form-section__span': isNameEmpty }"
              v-if="isNameEmpty"
              >Это поле нужно заполнить</span
            >
          </div>
        </div>
      </div>

      <div class="form-section__part">
        <div class="form-section__input_wrap">
          <input
            class="form-section__input_mail"
            type=""
            placeholder="E-mail*"
            max="50"
            v-model.trim="getMail"
            @blur="isMailTouched = true"
          />
          <div class="form-section__span-wrap">
            <span
              v-if="isMailError"
              :class="{ 'form-section__span-error': isMailError }"
              >Введите корректный email-адрес</span
            >
            <span
              :class="{ 'form-section__span': isMailEmpty }"
              v-if="isMailEmpty"
              >Это поле нужно заполнить</span
            >
          </div>
        </div>
      </div>

      <div class="form-section__part">
        <div class="form-section__input_wrap">
          <input
            class="form-section__input_phone"
            type="tel"
            placeholder="Тел*"
            max="30"
            v-model.trim="getPhone"
            @blur="isPhoneTouched = true"
          />
          <div class="form-section__span-wrap">
            <span
              v-if="isPhoneError"
              :class="{ 'form-section__span-error': isPhoneError }"
              >Телефон содержит неверные символы</span
            >
            <span
              :class="{ 'form-section__span': isPhoneEmpty }"
              v-if="isPhoneEmpty"
              >Это поле не может быть пустым</span
            >
          </div>
        </div>
      </div>

      <button class="form-section__button" type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
const emailCheckRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

const phoneCheckRegex = /^((\+7)[-]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;

export default {
  name: "SetForm",
  data() {
    return {
      errors: {},
      getName: null,
      getMail: null,
      getPhone: null,
      isNameTouched: false,
      isMailTouched: false,
      isPhoneTouched: false,
    };
  },

  computed: {
    isNameValid() {
      return /[A-Za-zА-Яа-я]/.test(this.getName);
    },

    isNameError() {
      return !this.isNameValid && this.isNameTouched && this.getName;
    },

    isNameEmpty() {
      return !this.isNameTouched && !this.getName;
    },

    // mail
    isMailValid() {
      return emailCheckRegex.test(this.getMail);
    },

    isMailError() {
      return !this.isMailValid && this.isMailTouched && this.getMail;
    },

    isMailEmpty() {
      return !this.isMailTouched && !this.getMail;
    },

    // phone

    isPhoneValid() {
      return phoneCheckRegex.test(this.getPhone);
    },

    isPhoneError() {
      return !this.isPhoneValid && this.isPhoneTouched && this.getPhone;
    },

    isPhoneEmpty() {
      return !this.isPhoneTouched && !this.getPhone;
    },
  },

  methods: {
    // checkEmptyProperty(propname) {
    //   return (
    //     this.errors[propname] !== undefined || this.errors[propname] !== ""
    //   );
    // },
    // validateName() {
    //   // debugger;
    //   console.log(this.getName);
    //   // debugger;
    //   if (!this.getName) {
    //     this.errors["getName"] = "Это поле должно быть заполнено";
    //   }
    //   if (!/[A-Za-zА-Яа-я]/.test(this.getName)) {
    //     //\p{L}
    //     this.errors["getName"] =
    //       "Поле фамилия не должно содержать &lt;&gt; {} [] () = *; или состоять только из пробелов, цифр или специальных символов.";
    //   } else {
    //     delete this.errors.getName;
    //   }
    // },
    // validateMail() {
    //   if (!this.getMail) {
    //     this.errors["getMail"] = "заполнить";
    //   }
    //   if (emailCheckRegex.test(this.getMail)) {
    //     this.errors.getMail = "Формат";
    //   } else {
    //     delete this.errors.getMail;
    //   }
    // },
    // validateAll() {
    //   if (this.validateName(true) && this.validateMail(true)) {
    //     alert("форма валидна");
    //   } else {
    //     alert("не валидна!");
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.form-section {
  width: 100%;
  padding-bottom: 50px;
  .form-section__title {
    font-family: Play;
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
  .form-section__form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 50px;
  }
  .form-section__input_wrap {
    display: flex;
    flex-direction: column;
  }
  .form-section__form-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // .form-section__input_name_wrap::after {
  //   content: "Это поле нужно заполнить";
  //   color: #cc3333;
  //   position: absolute;
  //   font-size: 12px;
  //   display: block;
  //   padding-left: 5px;
  // }
  .form-section__input_mail_wrap::after {
    content: "Это поле нужно заполнить";
    color: #cc3333;
    position: absolute;
    font-size: 12px;
    display: block;
    padding-left: 5px;
  }
  // .form-section__input_phone_wrap::before {
  //   content: "Должен начинаться на +7";
  //   color: #777777;
  //   position: absolute;
  //   font-size: 12px;
  //   display: block;
  //   padding-left: 5px;
  // }
  .form-section__input_phone_wrap::after {
    content: "Это поле нужно заполнить";
    color: #cc3333;
    position: absolute;
    font-size: 12px;
    display: block;
    padding-left: 5px;
  }

  .form-section__input,
  .form-section__input_mail,
  .form-section__input_phone {
    -webkit-text-size-adjust: 100%;
    margin: 0;
    vertical-align: middle;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    width: 236px;
    height: 40px;
    margin-left: 0;
    -webkit-print-color-adjust: exact;
    box-sizing: border-box;
    resize: none;
    margin-bottom: 0;
    padding-left: 15px;
    display: inline-block;
    // position: fixed;
  }

  .form-section__span {
    color: #cc3333;
    display: block;
    font-size: 12px;
    width: 260px;
    visibility: hidden;
  }

  .form-section__span-error {
    color: #cc3333;
    display: block;
    font-size: 12px;
    width: 260px;
    // visibility: visible;
  }
  // .form-section__label-wrapper {
  //   width: 236px;
  //   height: 40px;
  // }
  // .form-section__label-wrapper::after {
  //   content: "Это поле нужно заполнить";
  //   color: #cc3333;
  //   position: absolute;
  //   font-size: 12px;
  //   display: block;
  //   padding-left: 5px;
  //   bottom: -10px;
  // }
  // .form-section__input_phone_wrap {
  //   position: relative;
  // }
  // .form-section__input_phone_wrap::after {
  //   content: "Должен начинаться на +7";
  //   color: #777777;
  //   position: absolute;
  //   bottom: -15px;
  //   font-size: 12px;
  //   display: block;
  //   padding-left: 5px;
  // }
  .form-section__button {
    -webkit-text-size-adjust: 100%;
    margin: 0;
    vertical-align: middle;
    -webkit-appearance: button;
    -webkit-print-color-adjust: exact;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    user-select: none;
    box-sizing: border-box;
    transform: scale(1);
    transition: transform 0.1s ease;
    line-height: 1;
    font-family: Play, Arial;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    border: 2px solid #cc3333;
    padding: 10px 50px;
    background: transparent;
    color: white;
    margin-left: 90px;
  }
  .form-section__button:hover {
    border-color: #f0d943;
    color: #f0d943;
  }
}
</style>
