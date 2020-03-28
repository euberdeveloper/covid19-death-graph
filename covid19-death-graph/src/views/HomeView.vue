<template>
  <div class="home-view">
    <home />  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Home from '@/components/home/Home.vue';

@Component({
  components: {
    Home
  }
})
export default class HomeView extends Vue {
}
</script>

<style lang="scss">
.home-view {
  height: 100%;
  width: 100%;
}
</style>
