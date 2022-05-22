import { Lesson } from '@/models/Lesson'
import { LessonsService } from '@/services/LessonsService'
import { RootState } from '@/store'
import { ActionTree, Commit, Module, MutationTree } from 'vuex'

interface LessonsState {
  lessons: Lesson[]
}

const state: LessonsState = { lessons: [] }
const actions: ActionTree<LessonsState, RootState> = {
  async getLessons ({ commit }: {commit: Commit }) {
    try {
      const response = await LessonsService.getLessons()
      commit('setLessons', response.data)
      return response.data
    } catch (error: any) {
      throw error.response.data
    }
  },
  async postLesson (_, lesson: Lesson) {
    try {
      delete lesson.instructorName
      delete lesson.segment
      const response = await LessonsService.postLesson(lesson)
      await this.dispatch('lessons/getLessons')
      return response.data
    } catch (error: any) {
      throw error.response.data
    }
  }
}
const mutations: MutationTree<LessonsState> = {
  setLessons (state, payload) { state.lessons = payload || [] }
}
const namespaced = true

export const lessons: Module<LessonsState, RootState> = {
  state,
  actions,
  mutations,
  namespaced
}
