<template>
  <div>
    <h2>Docket Search</h2>
    <input
      type="text" name="search-input" v-model="search" :placeholder="phrase"
      autofocus>
  </div>
</template>

<script>
export default {
  name: 'MainSearch',
  data() {
    return {
      search: "",
      phrase: "Search"
    }
  },
  props: [],
  methods: {
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
  }
  input {
    border-radius: 5px;
    border: none;
    box-shadow: 0px 1.5px 2px 0.5px rgb(85, 85, 85);
    width: 80%;
    height: 35px;
    font-size: 15pt;
    margin: 0 auto;
    padding: 4px 8px 4px 8px;
    outline: none;
    transition: box-shadow 0.2s ease-in-out;
  }
  input:focus, input:hover {
    border-radius: 5px;
    box-shadow: 0px 2.25px 2.3px 1.5px rgba(85, 85, 85, 0.75);
  }
</style>
