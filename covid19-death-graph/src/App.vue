<template>
  <div id="app">
    <navbar class="navbar" />
    <filters class="filters" />
    <router-view class="router-view" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Navbar from '@/components/Navbar.vue';
import Filters from '@/components/Filters.vue';

@Component({
  components: {
    Navbar,
    Filters
  }
})
export default class App extends Vue {

  mounted(): void {
    let r = (this.$router as any)["options"]["routes"];
    console.log(r);
  }
}
</script>

<style lang="scss">
html, body, #app {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  width: 100%;
}
</style>
