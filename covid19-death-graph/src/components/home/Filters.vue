<template>
  <div class="filters">
    <h3 class="filter-title">Countries</h3>
    <ul class="country-list">
      <li v-for="c in countries" :key="c.code">
        <input
          type="checkbox"
          :id=" 'country-filter-list-' + c.code"
          :value="c.code"
          v-model="selectedCountry"
        />
        <label :for=" 'country-filter-list-' + c.code">{{c.name}}</label>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Filters extends Vue {
  private countries: { name: string; code: string }[] = [
    { name: "Italy", code: "IT" },
    { name: "United States", code: "US" },
    { name: "Germany", code: "DE" },
    { name: "France", code: "FR" },
    { name: "United Kingdom", code: "UK" },
    { name: "Spain", code: "SP" },
    { name: "Canada", code: "CA" }
  ];

  private selectedCountry: any[] = [];

  mounted() {}
}
</script>

<style lang="scss">
$main-color: #f66;

.filters {
  max-width: 250px;
  width: 33vw;
  display: inline-block;
  background-color: #eee;

  .filter-title {
    background-color: $main-color;
    margin: 0;
    padding: 0.7em 0;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5em;
  }

  ul.country-list {
    list-style: none;
    padding: 0.5em 1em;
    margin: 0;

    li {
      padding: 0.5em 0;

      input[type="checkbox"] {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeSpeed;
        width: 13px;
        height: 13px;
        margin: 0;
        margin-right: 1px;
        display: block;
        float: left;
        position: relative;
        cursor: pointer;
        -ms-transform: scale(1.5); /* IE */
        -moz-transform: scale(1.5); /* FF */
        -webkit-transform: scale(1.5); /* Safari and Chrome */
        -o-transform: scale(1.5); /* Opera */
        transform: scale(1.5);
      }
      input[type="checkbox"]:after {
        content: "";
        vertical-align: middle;
        text-align: center;
        line-height: 13px;
        position: absolute;
        cursor: pointer;
        height: 13px;
        width: 13px;
        left: 0px;
        top: 0px;
        font-size: 10px;
        background: #aaa;
      }
      input[type="checkbox"]:hover:after,
      input[type="checkbox"]:hover:after {
        content: "\2714";
        color: white;
      }
      input[type="checkbox"]:checked:after {
        background: $main-color !important;
        content: "\2714";
        color: white;
      }

      label {
        padding-left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
