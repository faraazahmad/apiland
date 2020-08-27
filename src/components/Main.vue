<template>
  <div class="hello">
    <div class="container">
      <h1 class="title">Public APIs</h1>

      <ul>
        <li v-for="entry in entries" :key="entry.link">
          {{ entry.API }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: mapState([
    'entries',
  ]),
})
export default class Main extends Vue {
  entries!: Array<object>;
}
</script>
