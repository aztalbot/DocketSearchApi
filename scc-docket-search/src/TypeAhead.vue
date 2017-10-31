<template>
  <div v-if="results.length > 0">
    {{ results[0] + ", " + results[1] }}
  </div>
</template>

<script>
export default {
  name: 'TypeAhead',
  data() {
    return {
      results: []
    }
  },
  props: ['input'],
  methods: {
    getResults(val) {
      return ["Hello", "Hi, there!"];
    }
  },
  watch: {
    input: function (val) {
      if(val == "") {
        this.results = [];
      } else {
        this.results = this.getResults(val);
      }
    }
  }
}
</script>

<style>

</style>
