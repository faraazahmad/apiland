<template>
  <div>
    <section class="hero is-white">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="title">API Land</h1>
              <h2 class="subtitle">Public APIs to help you build your next side project</h2>

              <p>Pick from a vast variety of APIs to use in your next side project</p>
              <br>
              <div class="buttons">
                <router-link to="/explore" class="button is-warning">Explore APIs</router-link>
                <a href="https://github.com/faraazahmad/apiland" target="new" class="button is-light">
                  <span class="icon">
                      <i class="fab fa-github"></i>
                  </span>
                  <span>View on</span>
                  <span style="margin-left: 5px"><strong>Github</strong></span>
                </a>
              </div>
            </div>
            <div class="column is-narrow">
              <img id="side-image" src="@/assets/web_dev.svg" alt="web developer">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="subtitle">More than</h1>
              <h1 class="title is-1">630</h1>
              <h1 class="subtitle">Public APIs</h1>
            </div>
            <div class="column">
              <h1 class="subtitle">Extensively</h1>
              <h1 class="title is-2">Detailed</h1>
              <h1 class="subtitle">Documentations</h1>
            </div>
            <div class="column">
              <h1 class="subtitle">Made with</h1>
              <h1 class="title is-2">Open Source</h1>
              <h1 class="subtitle">software</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <section id="jumbotron" class="hero is-warning is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column">
              <!-- <h1 class="subtitle">More than</h1> -->
              <h1 class="title is-1">What will you build next?</h1>
              <router-link to="/explore">
                <a style="background-color: rgba(0,0,0,.7)" class="button is-dark">
                  <span>Explore APIs</span>
                  <span class="icon">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<style scoped>
#side-image {
  height: 15rem;
}

#jumbotron {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);
}
</style>
