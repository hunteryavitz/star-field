import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import Gallery from '@/views/Gallery.vue'
import About from '@/views/About.vue'

const routes = [
    { path: '/', name: "LandingPage", component: LandingPage },
    { path: '/gallery', name: "Gallery", component: Gallery },
    { path: '/about', name: "About", component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
