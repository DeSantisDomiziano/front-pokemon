<script>
import axios from 'axios';
    export default {
        name: "PokemonVue",
        data() {
        return {
            API_URL: 'http://127.0.0.1:8000/api/pokemons',
            pokemon: [],
        }
        },
        methods: {
            get_pokemon(url) {
                axios
                    .get(url)
                    .then(resp => {
                        console.log(resp.data);
                        this.pokemon = resp.data.pokemon;
                    })
            },

            get_img(id) {
                return new URL(`../assets/img/pokemons/${id}.png`, import.meta.url).href
            }
        },
        mounted() {
            this.get_pokemon(this.API_URL + "/" + this.$route.params.id)
        }
    }
</script>

<template>
    <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-3 g-3">
            <div class="col" v-if="pokemon">
                <div class="card">
                    <img :src='get_img(pokemon.id)' class="card-img-top">
                    <div class="card-body">
                        <h4>
                            {{ pokemon.name }}
                        </h4>
                        <p>
                            <strong>
                                total stats:
                            </strong>
                            {{ pokemon.total }}
                        </p>
                        <p>
                            <strong>
                                HP:
                            </strong>
                            {{ pokemon.hp }}
                        </p>
                        <p>
                            <strong>
                                Attack:
                            </strong>
                            {{ pokemon.attack }}
                        </p>
                        <p>
                            <strong>
                                Defense:
                            </strong>
                            {{ pokemon.defense }}
                        </p>
                    </div>
                    <div class="card-footer">
                        <router-link :to="{name: 'pokemon', params: {id: pokemon.id} }" class="btn btn-primary"> Mostra </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>