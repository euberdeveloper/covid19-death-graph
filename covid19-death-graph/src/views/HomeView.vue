<template>
  <div class="home-view">
    ciao 
    <home /> 
    <filters />  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Home from '@/components/home/Home.vue';
import Filters from '@/components/home/Filters.vue';

@Component({
  components: {
    Home, Filters
  }
})
export default class HomeView extends Vue {
}
</script>

<style lang="scss">
</style>
