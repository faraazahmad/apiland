<template>
    <div class="card grid-content">
        <header class="card-header">
            <a href="#" class="card-header-icon" aria-label="more options">
                <span class="tag is-info is-light" v-if="entry.Cors === 'yes'">CORS</span>
                <span class="tag">
                    {{ entry.Category }}
                </span>
                <span class="icon has-text-grey-lighter" v-if="entry.HTTPS">
                    <i class="fas fa-lock"></i>
                </span>
            </a>
        </header>
        <div class="card-content">
            <div class="content">
                <h2 class="subtitle">{{ entry.API }}</h2>
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
