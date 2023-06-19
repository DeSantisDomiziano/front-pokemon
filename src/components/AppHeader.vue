<script>
export default {
    name: "HelloWorld",
}
</script>

<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">Pokedex</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="collapsibleNavId">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{name: 'home'}" aria-current="page">Home</router-link>
                    </li>
                </ul>
            </div>
      </div>
    </nav>
    
</template>

<style lang="scss" scoped>
</style>