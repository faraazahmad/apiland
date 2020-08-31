<template>
  <div class="hello">
    <Modal/>

    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="title">Public APIs</h1>
            </div>
            <div class="column is-narrow">
              <button v-on:click="showModal()" class="button is-light">
                <span class="icon is-medium">
                  <i class="fas fa-filter"></i>
                </span>
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ul class="flex-container" v-if="entries">
        <li v-for="entry in filter(entries)" :key="entry.link">
          <a v-bind:href="entry.Link" target="_blank" rel="noopener">
            <Card v-bind:entry="entry"/>
          </a>
        </li>
      </ul>
      <p class="has-text-centered" v-else>
        <button class="button is-loading is-large is-light">Loading</button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import Card from '@/components/Card.vue';
import Modal from '@/components/Modal.vue';
import store from '@/store';

@Component({
  components: {
    Card,
    Modal,
  },
  computed: mapState([
    'entries',
  ]),
})
export default class Main extends Vue {
  entries!: Array<{API: string; Category: string}>;

  filter() {
    const { entries } = this;
    const tags = store.state.filterTags;

    // filter by tags first
    if (tags.length > 0) {
      return entries.filter((entry) => tags.includes(entry.Category));
    }
    return entries;
  }

  // eslint-disable-next-line class-methods-use-this
  showModal() {
    const modal = document.querySelector('#filter-modal') as Element;
    modal.classList.add('is-active');
  }
}
</script>
