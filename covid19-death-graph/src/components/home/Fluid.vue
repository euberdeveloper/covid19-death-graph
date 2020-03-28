<template>
  <div class="fluid">
    fluid
  </div>
</template>


<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
@Component
export default class Fluid extends Vue {

  mounted() {
    
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
