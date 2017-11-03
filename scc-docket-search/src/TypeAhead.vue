<template>
  <div class="inputContainer">
    <input
      type="text" name="search-input" v-model="search" :placeholder="defaultText" :class="hasDropDown()"
      @keydown.up.prevent="up()" @keydown.enter.prevent="select()"
      @keydown.down.prevent="down()" @keydown.esc="escapeTypeAhead()"
      @blur="escapeTypeAhead()" autofocus>
    <div class="menuContainer" v-if="results.length > 0"
      @mouseover="typeAheadFocus(true)" @mouseout="typeAheadFocus(false)">
      <ul>
        <li @click="select()" v-for="(result, i) in results" :class="isActive(i)"
          @mouseover="setActive(i)" @mouseout="setActive(-1)">
          <b>{{result.slice(0, currentTerm.length)}}</b><span>{{result.slice(currentTerm.length)}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  var mostUsed = require('./typeAheadData.js');

  export default {
    name: 'TypeAhead',
    data() {
      return {
        results: [],
        currentTerm: "",
        activeItem: -1,
        search: "",
        typeAheadActive: false
      }
    },
    props: ['defaultText'],
    methods: {
      getResults(val) {
        var lastTerm = val.split(' ').slice(-1)[0];
        this.currentTerm = lastTerm;
        var data = mostUsed.getData();
        return data.filter((x) =>
          x.slice(0, lastTerm.length) == lastTerm &&
          x != lastTerm
        ).slice(0, 6);
      },
      select() {
        if(this.activeItem > -1) {
          this.search += this.getActiveItem();
        } else {
          alert("Form would be submitted!");
        }
        this.typeAhead = false;
        this.activeItem = -1;
      },
      getActiveItem() {
        return this.results[this.activeItem].slice(this.currentTerm.length);
      },
      up() {
        if(this.activeItem > -1)
          this.activeItem--;
      },
      down() {
        if(this.activeItem < this.results.length - 1)
          this.activeItem++;
      },
      isActive(index) {
        return (index == this.activeItem) ? "active" : "";
      },
      setActive(index) {
        this.activeItem = index;
      },
      escapeTypeAhead() {
        if(!this.typeAheadActive) {
          this.results = [];
        }
        return;
      },
      typeAheadFocus(b) {
        this.typeAheadActive = b;
      },
      hasDropDown() {
        return (this.results.length == 0) ? "" : "has-dropdown";
      }
    },
    watch: {
      search: function (val) {
        if(val == "")
          this.results = [];
        else
          this.results = this.getResults(val);
      }
    }
  }
</script>

<style scoped>
  .inputContainer {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 700px;
    margin: 0 auto;
  }
  input {
    border-radius: 5px;
    width: 100%;
    border: none;
    height: 35px;
    font-size: 15pt;
    margin: 0 auto;
    padding: 4px 8px 4px 8px;
    outline: none;
    -webkit-transition: box-shadow 0.2s ease-in-out;
    -moz-transition: box-shadow 0.2s ease-in-out;
    -o-transition: box-shadow 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: 0px 1.5px 2px 0.5px rgb(85, 85, 85);
  }
  input:focus, input:hover {
    border-radius: 5px;
    box-shadow: 0px 2.25px 2.3px 1.5px rgba(85, 85, 85, 0.75);
  }
  .has-dropdown, .has-dropdown:hover, .has-dropdown:focus {
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 0.5px 2px 0.5px rgb(85, 85, 85);
  }
  .menuContainer {
    width: 100%;
    margin: 0 auto;
    background: white;
    border-radius: 0px 0px 4px 4px;
    box-shadow: 0px 2px 2.5px 0.5px rgb(85, 85, 85);
    border-top: rgb(170, 170, 170) 1px solid;
    font-size: 13pt;
    padding: 4px 8px 4px 8px;
  }
  ul {
    width: 100%;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
  }
  li {
    text-align: left;
    padding: 2px 4px 2px 4px;
    cursor: pointer;
  }
  .active {
    background: #EEEEEE;
    border-radius: 4px;
  }
</style>
