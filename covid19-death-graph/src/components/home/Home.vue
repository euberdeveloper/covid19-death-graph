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
      data: [{
    x: 10,
    y: 20
}, {
    x: 15,
    y: 10
}],
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
    width: 400px !important;
    height: 400px !important;
  }
}
</style>
