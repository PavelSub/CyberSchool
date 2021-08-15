<template>
    <div class="buy__buttons">  
      <div v-for="(item, idx) in buttons" :key="idx">
        <button @click="onClick(item.type);" :class="changeHighlight(item.type)">{{ item.description }}</button>
        <div>{{ getPriceDescription(item.price) }}</div>
      </div>
      <ModalInput @close="onClick(null)" v-if="addFormShow"/>
    </div>
</template>

<script>

import ModalInput from './ModalInput.vue'

export default {
  name: "ButtonsBuy",
  props: {
      buttons: Array,
  },
  data() {
    return {
      activebutton: "",
      addFormShow: false,
      };
  },
  components: {
    ModalInput,
  },
  methods: {
    onClick(type){
        this.activebutton = type;
        this.addFormShow = !this.addFormShow;
        this.$emit("getBuyAction", this.activebutton);
    },
    changeHighlight(item){
      return this.activebutton==item? 'ci__buttonelemactiv' : 'ci__buttonelem';
    },
    getPriceDescription(price) {
      return `От ${price} руб./ час`;
    }, 

  },
  // created() {
  //     this.activebutton = !this.activebutton&&this.buttons.length>0? this.buttons[0] : this.activebutton;
  // },
}
</script>

<style scoped>
  .buy__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ci__buttonelemactiv{
    font-family: Play,Arial;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    background: transparent;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 2px solid #CC3333;
    color: red;
    padding: 15px 25px;
  }
  .ci__buttonelem{
    font-family: Play,Arial;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    background: transparent;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 2px solid #CC3333;
    color: #FFFFFF;
    padding: 15px 25px;
  }
  button:hover {
    background: #fdaaaa;
  }
  button:active {
    background: #e65d4b;
  }
</style>