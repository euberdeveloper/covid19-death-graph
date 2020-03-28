<template>
  <div class="home-view">
    ciao 
    <graph /> 
    <filters />  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Graph from '@/components/home/Graph.vue';
import Filters from '@/components/home/Filters.vue';

@Component({
  components: {
    Graph, Filters
  }
})
export default class HomeView extends Vue {
}
</script>

<style lang="scss">
</style>
