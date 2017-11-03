<template>
  <div>
    <h2>{{ title }}</h2>
    <typeahead :default-text="placeholder">
    </typeahead>
  </div>
</template>

<script>
import TypeAhead from "./TypeAhead.vue"

export default {
  name: 'MainSearch',
  data() {
    return {
      title: "Docket Search",
      placeholder: "Search"
    }
  },
  components: {
    'typeahead': TypeAhead
  }
}
</script>

<style scoped>
  div {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 30vh;
  }
  h2 {
    width: 100%;
    font-size: 36pt;
    padding: 0 0 5px 0;
    margin: 0;
    color: #4A148C;
  }
</style>
