<template>
  <div class="graph-one">
    <graph />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Graph from '@/components/Graph.vue';

@Component({
  components: {
    Graph
  }
})
export default class GraphOne extends Vue {
  
}
</script>

<style lang="scss" scoped>
.graph-one {
  
}
</style>
