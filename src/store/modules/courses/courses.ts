import { Course } from '@/models/Course'
import { CoursesSevice } from '@/services/CoursesSevice'
import { RootState } from '@/store'
import { ActionTree, Commit, Module, MutationTree } from 'vuex'

interface CoursesState {
  courses: Course[]
}

const state: CoursesState = { courses: [] }
const actions: ActionTree<CoursesState, RootState> = {
  async getCourses ({ commit }: {commit: Commit }) {
    try {
      const response = await CoursesSevice.getCourses()
      commit('setCourses', response.data)
      return response.data
    } catch (error: any) {
      throw error.response.data
    }
  }
}
const mutations: MutationTree<CoursesState> = {
  setCourses (state, payload) { state.courses = payload || [] }
}
const namespaced = true

export const courses: Module<CoursesState, RootState> = {
  state,
  actions,
  mutations,
  namespaced
}
