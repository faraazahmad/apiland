<template>
    <div class="card grid-content">
        <header class="card-header">
            <a href="#" class="card-header-icon" aria-label="more options">
                <span class="tag is-success is-light" v-if="entry.HTTPS">HTTPS</span>
                <span class="tag is-warning is-light" v-if="entry.Cors === 'yes'">CORS</span>
                <span class="tag">
                    {{ entry.Category }}
                </span>
            </a>
        </header>
        <div class="card-content">
            <div class="content">
                <h2 class="subtitle is-4">{{ entry.API }}</h2>
                <p>{{ entry.Description }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const CardProps = Vue.extend({
  props: {
    entry: Object,
  },
});

@Component
export default class Card extends CardProps {

}
</script>

<style scoped>
    .card-header span {
        margin-right: 0.5rem;
    }
</style>
