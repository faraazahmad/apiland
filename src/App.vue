<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import store from '@/store/index';

@Component({
  components: {
    Footer,
    Navbar,
  },
})
export default class extends Vue {
  beforeMount() {
    store.dispatch('syncEntriesFromApi');
    store.dispatch('syncCategoriesFromApi');
  }
}
</script>

<style>
  html, body {
    background-color: #f8f8f8;
  }

  .flex-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr));
  }

  .card {
    border: 1px solid #f2f2f2;
    border-radius: 0.25rem;
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

  .modal-card-head, .modal-card-foot {
    border: none;
  }

  .modal-card-foot {
    background-color: white;
  }

  .modal-background {
    background-color: rgba(256, 256, 256, 0.86);
  }

  .modal-card {
    border: 1px solid #eee;
    border-radius: 5px;
  }

  .checkboxes .checkbox {
    margin: 0.5rem;
  }
</style>
