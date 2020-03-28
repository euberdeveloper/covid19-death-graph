<template>
  <div class="home">
    <canvas id="chart" width="400" height="400"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Chart } from 'chart.js';

@Component
export default class Home extends Vue {
  private data = {

  }

  private options = {
    
  }

  mounted() {
    const ctx = (document as any).getElementById('chart').getContext('2d');
    let myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [1,2,3,4,5,6,7,8,0],
        datasets: [{
          label: "VERDE",
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(255, 0, 0, 0.5)',
          data: [1,2,3,4,5,6,7,8,0].sort((a, b) => Math.random() > 0.5 ? 1 : -1)
        },{
          label: "ROSSO",
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 255, 0, 0.5)',
          data: [1,2,3,4,5,6,7,8,0].sort((a, b) => Math.random() > 0.5 ? 1 : -1)
        }]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
    }
}
</script>

<style lang="scss">
.home {
  height: 100%;
  width: 100%;

  canvas {
    width: 200px !important;
    height: 200px !important;
  }
}
</style>
