import { User } from '@/models/User'
import UserEntity from '@/models/UserEntity'
import { UsersService } from '@/services/UsersService'
import Vue from 'vue'
import Vuex, { Commit, StoreOptions } from 'vuex'
import VuexPersistence from 'vuex-persist'
import { forum, lessons, segments, instructors, courses } from './modules'

Vue.use(Vuex)
export interface RootState {
  user: User;
  users: User[];
  isAuthenticated: boolean;
}

const vuexLocal = new VuexPersistence<RootState>({
  key: 'thoth',
  storage: window.localStorage,
  reducer: (state) => {
    return { user: state.user }
  }
})

export const store: StoreOptions<RootState> = {
  state: {
    user: new UserEntity(),
    users: [],
    isAuthenticated: false
  },
  mutations: {
    setIsAuthenticated (state, payload) { state.isAuthenticated = payload },
    setUser (state, payload) { state.user = payload || new UserEntity() },
    setUsers (state, payload) { state.users = payload || [] }
  },
  actions: {
    async postUser (_, user: User) {
      try {
        const response = await UsersService.postUser(user)
        return response.data
      } catch (error: any) {
        throw error.response.data
      }
    },
    async getUser ({ commit }: {commit: Commit}, userId: string) {
      try {
        const response = await UsersService.getUser(userId)
        commit('setUser', response.data)
        return response.data
      } catch (error: any) {
        throw error.response.data
      }
    },
    async getUsers ({ commit }: {commit: Commit}) {
      try {
        const response = await UsersService.getUsers()
        commit('setUsers', response.data)
        return response.data
      } catch (error: any) {
        throw error.response.data
      }
    },
    async authenticateUser ({ commit }: {commit: Commit}, user: User) {
      try {
        const response = await UsersService.authenticateUser(user)
        commit('setIsAuthenticated', response.data)
        return response.data
      } catch (error: any) {
        throw error.response.data
      }
    }
  },
  getters: {
    hasUserLogged (state) {
      return !!state.user.id
    }
  },
  modules: {
    forum,
    lessons,
    segments,
    instructors,
    courses
  },
  plugins: [vuexLocal.plugin]
}
const VuexStore = new Vuex.Store<RootState>(store)
export default VuexStore
