<template>
  <div v-if="results.length > 0" @keyup.up="this.highlighted--" @keyup.down="this.highlighted++"
    @keyup.enter="$parent.choose(this.results[highlighted].slice(currentTerm.length))">
    <ul>
      <li is="typeaheaditem" @choose="choose($event)" v-for="(result, i) in results" :current="highlighted"
        :item="result" :term="currentTerm" :index="i">
      </li>
    </ul>
  </div>
</template>

<script>
import TypeAheadItem from "./TypeAheadItem.vue";
var mostUsed = require('./typeAheadData.js');

export default {
  name: 'TypeAhead',
  data() {
    return {
      results: [],
      currentTerm: "",
      highlighted: 0
    }
  },
  props: ['input'],
  methods: {
    getResults(val) {
      var lastTerm = val.split(' ').slice(-1)[0];
      this.currentTerm = lastTerm;
      var data = mostUsed.getData();
      return data.filter((x) => x.slice(0, lastTerm.length) == lastTerm).slice(0, 6);
    },
    choose(x) {
      this.$parent.choose(x);
    }
  },
  watch: {
    input: function (val) {
      if(val == "") {
        this.results = [];
        this.$emit('typeaheadInactive')
      } else {
        this.$emit('typeaheadActive')
        this.results = this.getResults(val);
        if(this.results.length == 0)
          this.$emit('typeaheadInactive');
      }
    }
  },
  components: {
    'typeaheaditem': TypeAheadItem
  }
}
</script>

<style scoped>
  div {
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
  }
  li:hover {
    background: #EEEEEE;
    border-radius: 4px;
  }
</style>
