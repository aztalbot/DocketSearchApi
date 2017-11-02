<template>
  <div v-if="results.length > 0">
    <ul>
      <li v-for="result in results" @click="$parent.choose(result.slice(currentTerm.length))">
        <b>{{result.slice(0, currentTerm.length)}}</b><span>{{result.slice(currentTerm.length)}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
var mostUsed = require('./typeAheadData.js');

export default {
  name: 'TypeAhead',
  data() {
    return {
      results: [],
      currentTerm: ""
    }
  },
  props: ['input'],
  methods: {
    getResults(val) {
      var lastTerm = val.split(' ').slice(-1);
      this.currentTerm = lastTerm[0];
      var data = mostUsed.getData();
      return data.filter((x, i) => x.includes(lastTerm[0])).slice(0, 6);
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
      }
    }
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
