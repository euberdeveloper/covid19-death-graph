<template>
  <div id="app">
    <div class="main">
      <router-view class="router-view" />
      <navbar class="navbar" />
    </div>
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
  height: 100%;
  width: 100%;
  display: flex;
}

.filters {

}

.main {
  flex-grow: 1;
}

</style>
