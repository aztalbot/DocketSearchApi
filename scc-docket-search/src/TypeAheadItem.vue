<template>
  <li :style="hover" @click="$emit('choose', item.slice(term.length))">
    <b>{{item.slice(0, term.length)}}</b><span>{{item.slice(term.length)}}</span>
  </li>
</template>

<script>
export default {
  name: "TypeAheadItem",
  props: ['item', 'term', 'current', 'index'],
  data() {
    return {
      hover: ""
    }
  },
  watch: {
    current: function(val) {
      if(this.index == val) {
        hover = "{ background: #EEEEEE }";
      } else {
        hover = "";
      }
    }
  }
}
</script>
