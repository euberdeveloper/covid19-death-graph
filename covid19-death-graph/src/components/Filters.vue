<template>
  <div class="filters">
    <h3 class="filter-title">Countries</h3>
    <ul class="country-list">
      <li v-for="country in countries" :key="country.slug">
        <input
          type="checkbox"
          :id="`country-filter-list-${country.slug}`"
          :value="country.slug"
          v-model="selectedCountry"
        />
        <label :for="`country-filter-list-${country.slug}`">{{country.name}}</label>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as api from '@/services/api';

@Component
export default class Filters extends Vue {
  private countries: { name: string; slug: string }[] = [];

  private shit: any = {};

  private selectedCountry: any[] = [];

  async mounted() {
    this.countries = await api.getCountries();
    this.shit = await api.getCountryRecords('italy');
    console.log(JSON.stringify(this.shit, null, 2));
  }
}
</script>

<style lang="scss" scoped>
$main-color: #f44;

.filters {
  overflow: hidden;
  max-width: 240px;
  width: 240px;
  display: flex;
  flex-direction: column;
  background-color: #eee;

  .filter-title {
    line-height: 50px;
    height: 50px;
    background-color: $main-color;
    margin: 0;
    padding: 0;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.4em;
  }

  ul.country-list {
    height: 100%;
    list-style: none;
    padding: 0.5em 1em;
    margin: 0;
    overflow-y: scroll;

    li {
      display: flex;
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
        flex-grow: 1;
        padding-left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
