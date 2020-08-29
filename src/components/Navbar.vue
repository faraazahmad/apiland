<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item"><strong>API Land</strong></router-link>

                <a role="button" class="navbar-burger burger" aria-label="menu"
                    aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <router-link to="/" class="navbar-item">Home</router-link>
                    <router-link to="/explore" class="navbar-item">Explore</router-link>
                </div>
                <div class="navbar-end">
                    <a href="https://github.com/faraazahmad/apiland" class="navbar-item is-size-4" target="new">
                        <span class="icon">
                            <i class="fab fa-github"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>
