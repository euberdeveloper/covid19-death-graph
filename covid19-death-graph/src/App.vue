<template>
  <div id="app">
    <router-view class="router-view" />
    <navbar class="navbar" />
    <filters class="filters" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Navbar from "@/components/Navbar.vue";
import Filters from "@/components/Filters.vue";

@Component({
  components: {
    Navbar,
    Filters
  }
})
export default class App extends Vue {
  mounted(): void {}
}
</script>

<style lang="scss">
html,
body,
#app {
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.filters {
  position: absolute;
  top: 60px;
  bottom: 0;
  right: 0;
  transition: 0.3s ease-in-out right;

  &.closed {
    right: 0px;
  }
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
