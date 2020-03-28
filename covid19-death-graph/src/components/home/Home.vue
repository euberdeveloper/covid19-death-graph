<template>
  <div class="home">
    <!-- <canvas id="chart" width="400" height="400"></canvas> -->
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Chart } from "chart.js";

@Component
export default class Home extends Vue {
  private chart: Chart = null;

  mounted() {
    let ctx = (document as any).getElementById("chart")?.getContext("2d")
    if (!ctx) return;
    this.chart = new Chart(
      ctx,
      {
        type: "line",
        data: {
          labels: [1,2,3,4],
          datasets: [
            {
              label: "VERDE",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(255, 0, 0, 0.5)",
              data: [1,2,3,4],
              borderWidth: 20
            },
            {
              label: "ROSSO",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(0, 255, 0, 0.5)",
              data: [1,2,3,4],
              borderWidth: 20
            },
            {
              label: "ROSSO",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(0, 0, 255, 0.5)",
              data: [1,2,3,4],
              borderWidth: 20
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      }
    );
  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
  width: 100%;

  canvas {
    position: absolute;
    z-index: 20;
    top: 0;
    width: 600px !important;
    height: 600px !important;
  }
  input {
    width: 600px;
  }
}
</style>
