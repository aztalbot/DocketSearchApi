<template>
  <div>
    <h2>Docket Search</h2>
    <div class="inputContainer" @mouseover="typeAheadFocus(true)"
    @mouseout="typeAheadFocus(false)">
    <input
      type="text" name="search-input" v-model="search" :placeholder="phrase"
      autofocus :class="status" @blur="escapeTypeAhead()"
      @focus="enableTypeAhead()">
    <typeahead v-if="typeAhead" @typeaheadActive="status = 'alternate-style'"
      @typeaheadInactive="status = ''" :input="search">
    </typeahead>
    </div>
  </div>
</template>

<script>
import TypeAhead from "./TypeAhead.vue"

export default {
  name: 'MainSearch',
  data() {
    return {
      search: "",
      phrase: "Search",
      status: "",
      typeAhead: false,
      typeAheadActive: false
    }
  },
  props: [],
  methods: {
    escapeTypeAhead() {
      if(!this.typeAheadActive) {
        this.typeAhead = false;
        this.status = "";
      }
      return;
    },
    enableTypeAhead() {
      this.typeAhead = true;
    },
    typeAheadFocus(b) {
      this.typeAheadActive = b;
    },
    choose(x) {
      this.search += x;
      this.typeAhead = false;
      this.status = "";
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
  .inputContainer {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    width: 80%;
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
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: 0px 1.5px 2px 0.5px rgb(85, 85, 85);
  }
  input:focus, input:hover {
    border-radius: 5px;
    box-shadow: 0px 2.25px 2.3px 1.5px rgba(85, 85, 85, 0.75);
  }
  .alternate-style, .alternate-style:hover, .alternate-style:focus {
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 0.5px 2px 0.5px rgb(85, 85, 85);
  }
</style>
