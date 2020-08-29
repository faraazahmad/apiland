<template>
    <div id="filter-modal" class="modal">
        <div class="modal-background" v-on:click="hideModal()"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Filter result</p>
                <button v-on:click="hideModal()" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div>
                    <h3 class="subtitle is-5">By category</h3>
                    <div class="checkboxes">
                        <label class="checkbox" v-for="category in categories" :key="category">
                            <input type="checkbox" checked v-if="filterTags.includes(category)"
                                v-on:click="toggleCategory(category)">
                            <input type="checkbox" v-else v-on:click="toggleCategory(category)">
                            {{ category }}
                        </label>
                    </div>
                </div>
                <br>
                <p class="has-text-grey">More filter options coming soon</p>
            </section>
            <footer class="modal-card-foot">
                <button v-on:click="hideModal()" class="button is-success">Done</button>
            </footer>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import store from '@/store';

@Component({
  computed: mapState([
    'categories',
    'filterTags',
  ]),
})
export default class Modal extends Vue {
    categories!: Array<string>;

    filterTags!: Array<string>;

    // eslint-disable-next-line class-methods-use-this
    hideModal() {
      const modal = document.querySelector('#filter-modal') as Element;
      modal.classList.remove('is-active');
    }

    // eslint-disable-next-line class-methods-use-this
    toggleCategory(category: string) {
      store.dispatch('toggleCategory', category);
    }
}
</script>

<style>

</style>
