import { createRouter, createWebHistory } from 'vue-router';
import PokedexVue from './pages/PokedexVue.vue';
import PokemonVue from './pages/PokemonVue.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PokedexVue
        },
        {
            path: '/pokedex/:id',
            name: 'pokemon',
            component: PokemonVue
        },
        { 
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound 
          },
    ]
});
export { router };