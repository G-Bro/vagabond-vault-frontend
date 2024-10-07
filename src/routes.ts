

export default [
    {
        path: '/',
        component: () => import('./App.vue')
    },
    {
        path: '/player-character/:id',
        component: () => import('./pages/player/PlayerCharacter.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('./pages/404/NotFound.vue')
    }
];