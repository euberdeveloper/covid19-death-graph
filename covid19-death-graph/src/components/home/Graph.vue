<template>
  <div class="graph">
    <div id="div_g" style="width:600px; height:300px;"></div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dygraph from "dygraphs";
import * as API from "../../services/api";

@Component
export default class Graph extends Vue {
  private countries: string[] = [];
  private chart: Dygraph | null = null;
  private data: {
    [countryName: string]: (number | null)[][];
  } = {};

  mounted() {

    this.data["IT"] = [
        [1, 10, null],
        [2, 20, null],
        [3, 50, null],
        [4, 70, null]
      ]

    this.data["DE"] = [
        [1, null, 34],
        [2, null, 92],
        [3, null, 84],
        [4, null, 29]
      ]

    console.log(JSON.stringify(this.data))

    this.chart = new Dygraph(
      document.getElementById("div_g") as HTMLElement,
      Object.values(this.data).flat(1),
      {
        labels: ["Time", "A", "B"]
      }
    );



    let i = 5;
    setInterval(() => {
      this.data["IT"].push([i++, Math.random() * 100, null]);
      this.data["DE"].push([i++, null, Math.random() * 100]);

      (this.chart as Dygraph).updateOptions({
        file: Object.values(this.data).flat(1)
      });
    }, 1000);
  }

  public createChart(): void {}

  public updateChart(countryCodes: string[], dates: string[]) {}
}
</script>

<style lang="scss">
</style>
