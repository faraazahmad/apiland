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
