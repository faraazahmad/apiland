<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store/index';

@Component
export default class extends Vue {
  beforeMount() {
    store.dispatch('syncEntriesFromApi');
  }
}
</script>

<style>
  .flex-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
  }

  .card {
    border: 1px solid #eee;
    border-radius: 5px;
    width: 21rem;
    min-height: 14rem;
    display: inline-block;
    transition: 0.15s border-color ease-out;
  }

  .card, .card-header {
    box-shadow: none;
  }

  .card:hover {
    border-color: #00d1b2;
  }
</style>
