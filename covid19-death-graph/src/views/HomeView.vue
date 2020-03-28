<template>
  <div class="home-view">
    <fluid />  
    <home />  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Home from '@/components/home/Home.vue';
import Fluid from '@/components/home/Fluid.vue';

@Component({
  components: {
    Home, Fluid
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
