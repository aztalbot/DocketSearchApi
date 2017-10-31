<template>
  <div class="flex-container">
    <div @click="toggleMenu" class="menu-toggle">
      <div class="flex-row">
        <div v-for="n in 3" :class="styleSquare(true, n)"></div>
      </div>
      <div class="flex-row">
        <div v-for="n in 3" :class="styleSquare(false, n)"></div>
      </div>
      <div class="flex-row">
        <div v-for="n in 3" :class="styleSquare(true, n)"></div>
      </div>
    </div>
    <transition name="unravel">
      <div v-if="this.toggle" class="mode-menu">
        <div class="option" v-for="n in 5">
          Option {{ n }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MenuToggle',
  data () {
    return {
      toggle: false
    }
  },
  methods: {
    toggleMenu() {
      this.toggle = !this.toggle;
    },
    styleSquare(b, n) {
      let style = "squares"
      if(this.toggle && b && n%2==0) {
        style = "squares squareCross"
      } else if (this.toggle && !b && n%2!=0){
        style = "squares squareCross"
      }
      return style;
    }
  }
}
</script>

<style scoped>
  .flex-container {
    -webkit-display: flex;
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 25px;
    right: 50px;
  }
  .menu-toggle {
    -webkit-display: flex;
    display: flex;
    flex-direction: column;
    background: none;
    color: grey;
    width: 50px;
    height: 50px;
    justify-content: center;
  }
  .menu-toggle:hover .squares {
    box-shadow: 0px 0.5px 0px 0.5px rgba(85, 85, 85, 0.80);
    background: rgb(120, 120, 120)
  }
  .flex-row {
    -webkit-display: flex;
    display: flex;
    flex-wrap: nowrap;
    justify-content:center;
    flex-direction: row;
  }
  .squares {
    background: rgb(170, 170, 170);
    width: 8px;
    height: 8px;
    border-radius: 100px;
    margin: 2.5px 2.5px 2.5px 2.5px;
    transition: all 0.3s ease-in-out
  }
  .mode-menu {
    -webkit-display: flex;
    display: flex;
    flex-wrap: nowrap;
    justify-content:center;
    flex-direction: row;
    order: -1;
    border-radius: 8px;
    background: none;
    width: auto;
    padding: 4px 10px 4px 10px;
    box-shadow: 0px 0.5px 2px 0.5px rgba(85, 85, 85, 0.70);
    transition: box-shadow 0.1s ease-in-out;
  }
  .mode-menu:hover {
    box-shadow: 0px 1px 3px 1.5px rgba(85, 85, 85, 0.50);
  }
  .unravel-enter-active, .unravel-leave-active {
    transition: opacity 0.5s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  .unravel-enter, .unravel-leave-to {
    opacity: 0;
    box-shadow: 0px 0px 0px 0px rgba(85, 85, 85, 0.00);
  }
  .option {
    margin: 5px;
  }
  .squareCross {
    opacity: 0.1 !important;
  }
</style>
