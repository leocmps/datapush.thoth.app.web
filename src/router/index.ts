import Vue from 'vue'
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/home/Home.vue')
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('../components/sign-in/SignIn.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../components/sign-up/SignUp.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../components/courses/Courses.vue')
  },
  {
    path: '/lessons',
    name: 'Lessons',
    component: () => import('../components/lessons/Lessons.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import('../components/forum/Forum.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
  const blockedRoutes = ['Courses', 'Lessons', 'Forum']
  if (blockedRoutes.includes(to.name!) && !store.state.user.id) next({ name: 'SignIn' })
  else next()
})

export default router
