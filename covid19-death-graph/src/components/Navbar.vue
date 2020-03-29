<template>
  <div class="navbar">
    <router-link class="navbar-item" to="/graph-one">Grafico 1</router-link>
    <router-link class="navbar-item active" to="/graph-two">Grafico 2</router-link>
    <router-link class="navbar-item" to="/graph-three">Grafico 3</router-link>
    <router-link class="navbar-item" to="/graph-four">Grafico 4</router-link>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  //private routes

  mounted(): void {
    let r = (this.$router as any)["options"]["routes"];
    console.log(r);
  }
}
</script>

<style lang="scss">

.navbar {
  height: 60px;
  margin: 0;
  padding: 0;
  background-color: #F44;
  display: flex;
  justify-content: space-around;

  .navbar-item {
    line-height: 60px;
    color: white;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    text-transform: uppercase;
    transition: 0.2s ease-in-out color;

    .active {
      text-decoration: underline;
    }

    :hover {
      color: #DDD;
    }

  }
}

</style>
