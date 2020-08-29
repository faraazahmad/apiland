<template>
  <div>
    <section class="hero is-white">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="title">API Land</h1>
              <h2 class="subtitle">Public APIs to help you build your next side project</h2>

              <router-link to="/explore" class="button is-warning">Explore APIs</router-link>
            </div>
            <div class="column is-narrow">
              <img id="side-image" src="@/assets/web_dev.svg" alt="web developer">
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <h1 class="subtitle"></h1>
    </div>
  </div>
</template>

<style scoped>
#side-image {
  height: 15rem;
}
</style>
