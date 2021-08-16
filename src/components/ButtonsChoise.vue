<template>
  <div>
    <h2 class="ci__header">{{ buttonblock.header }}</h2>
    <h3 class="ci__message">{{ buttonblock.message }}</h3>
    <div class="ci__buttons">
      <button
        @click="onClick(item)"
        :class="changeHighlight(item)"
        v-for="(item, idx) in buttonblock.buttons"
        :key="idx"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonsChoise",
  props: {
    buttonblock: Object,
  },
  data() {
    return {
      activebutton: "",
    };
  },
  methods: {
    onClick(type) {
      this.activebutton = type;
      this.$emit("setParrentInfo", type);
    },
    changeHighlight(item) {
      return this.activebutton == item
        ? "ci__buttonelemactiv"
        : "ci__buttonelem";
    },
  },
  created() {
    this.activebutton =
      !this.activebutton && this.buttonblock.buttons.length > 0
        ? this.buttonblock.buttons[0]
        : this.activebutton;
  },
};
</script>

<style scoped>
.ci__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ci__buttonelemactiv {
  background-color: red;
}
.ci__buttonelem {
  background-color: gray;
}
button:hover {
  background: #fdaaaa;
}
button:active {
  background: #e65d4b;
}
</style>
