<template>
  <div class="home">
    <canvas id="chart" width="400" height="400"></canvas>
    <button @click="pippo">Rigioca</button>
    <p>{{counter}}</p>
    <input type="range" min="0" max="16581375" class="slider" id="myRange" v-on:input="color = $event.target.value" @change="col(0)"/><br>
    <input type="range" min="0" max="16581375" class="slider" id="myRange" v-on:input="color = $event.target.value" @change="col(1)"/><br>
    <input type="range" min="0" max="16581375" class="slider" id="myRange" v-on:input="color = $event.target.value" @change="col(2)"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Chart } from "chart.js";

@Component
export default class Home extends Vue {
  private data = {};

  private options = {};
  private chart: Chart = null;
  private finito: boolean = false;
  private counter: number = 0;

  private color: number = 1;
  private intervallo: number = 3;
  private len: number = 5;

  mounted() {
    this.chart = new Chart(
      (document as any).getElementById("chart").getContext("2d"),
      {
        type: "line",
        data: {
          labels: this.randArray(this.len, this.intervallo),
          datasets: [
            {
              label: "VERDE",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(255, 0, 0, 0.5)",
              data: this.randArray(this.len, this.intervallo),
              borderWidth: 20
            },
            {
              label: "ROSSO",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(0, 255, 0, 0.5)",
              data: this.randArray(this.len, this.intervallo),
              borderWidth: 20
            },
            {
              label: "ROSSO",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(0, 0, 255, 0.5)",
              data: this.randArray(this.len, this.intervallo),
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

    setInterval(async () => {
      if (this.finito) return;
      if (!this.chart) return;

      this.counter++;
      this.chart.data.datasets.forEach(d => {
        d.data = this.randArray(this.len, this.intervallo);
      });
      this.chart.update();

      this.finito = true;
      for (let i = 0; i < this.len; i++)
        if (
          this.chart.data.datasets[0].data[i] !=
            this.chart.data.datasets[1].data[i] ||
          this.chart.data.datasets[0].data[i] !=
            this.chart.data.datasets[2].data[i]
        )
          this.finito = false;


    }, 100);
  }

  col(n) {
    let cc: number = this.color
    let a: number = cc % 255
    cc /= 255;
    let b: number = cc % 255
    let c = cc / 255;

    this.chart.data.datasets[n].borderColor = `rgba(${a}, ${b}, ${c}, 0.5)`
    this.chart.update()
  }

  pippo() {
    this.counter = 0;
    this.finito = false;
    return;
  }

  randArray(l: number, i: number) {
    let res = [];
    for (let j = 0; j < l; j++) res.push(Math.floor(Math.random() * i));
    return res;
  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
  width: 100%;

  canvas {
    width: 600px !important;
    height: 600px !important;
  }
  input {
    width: 600px;
  }
}
</style>
