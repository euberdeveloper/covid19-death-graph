<template>
  <div class="graph">
    <div id="div_g" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Dygraph from "dygraphs";
import * as api from "@/services/api";

@Component
export default class Graph extends Vue {
  private countries: string[] = [];
  private chart: Dygraph | null = null;
  private data: {
    [countryName: string]: (number | Date | null)[][];
  } = {};

  async mounted() {

    this.data["IT"] = [
      [new Date("2014-05-07"), 10, null],
      [new Date("2014-05-08"), 20, null],
      [new Date("2014-05-09"), 50, null],
      [new Date("2014-05-10"), 70, null],
      [new Date("2014-05-11"), 70, null],
      [new Date("2014-05-12"), 70, null],
      [new Date("2014-05-13"), 70, null],
      [new Date("2014-05-14"), 70, null]
    ];

    this.data["DE"] = [
      [new Date("2014-05-07"), null, 34],
      [new Date("2014-05-08"), null, 92],
      [new Date("2014-05-09"), null, 84],
      [new Date("2014-05-10"), null, 29],
      [new Date("2014-05-11"), 70, null],
      [new Date("2014-05-12"), 70, null],
      [new Date("2014-05-13"), 70, null],
      [new Date("2014-05-14"), 70, null]
    ];

    this.chart = new Dygraph(
      document.getElementById("div_g") as HTMLElement,
      Object.values(this.data).flat(1),
      {
        labels: ["Time", "A", "B"]
      }
    );
  }

  public createChart(): void {}

  public updateChart(countryCodes: string[], dates: string[]) {}
}
</script>

<style lang="scss" scoped>
.graph {
  div {
    position: absolute;
    right: 250px;
    left: 1px;
    top: 60px;
    bottom: 1px;
    max-height: 100%;
  }
}
</style>
