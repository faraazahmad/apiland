<template>
  <div class="hello">
    <Navbar/>

    <div class="container">
      <h1 class="title">Public APIs</h1>

      <ul class="flex-container">
        <li v-for="entry in entries" :key="entry.link">
          <a v-bind:href="entry.Link" target="new">
            <Card v-bind:entry="entry"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import Card from '@/components/Card.vue';
import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
    Card,
    Navbar,
  },
  computed: mapState([
    'entries',
  ]),
})
export default class Main extends Vue {
  entries!: Array<object>;
}
</script>
