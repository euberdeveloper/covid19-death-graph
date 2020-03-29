<template>
  <div class="navbar">
    <router-link exact-active-class="active" class="navbar-item" to="/graph-one">Grafico 1</router-link>
    <router-link exact-active-class="active" class="navbar-item" to="/graph-two">Grafico 2</router-link>
    <router-link exact-active-class="active" class="navbar-item" to="/graph-three">Grafico 3</router-link>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  //private routes

  mounted(): void {}
}
</script>

<style lang="scss" scoped>
$main-color: #111;

.navbar {
  height: 60px;
  margin: 0;
  padding: 0;
  background-color: $main-color;
  display: flex;
  justify-content: center;

  .navbar-item {
    line-height: 30px;
    color: white;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3em;
    text-transform: uppercase;
    transition: 0.2s ease-in-out color;
    margin: 10px 1em;
    padding: 5px 0.4em;
    border-radius: 5px;
    transition: 0.3s ease-out background-color;

    &.active {
      text-decoration: underline;
    }

    &:hover {
      background-color: #333;
      color: #eee;
    }
  }
}
</style>
