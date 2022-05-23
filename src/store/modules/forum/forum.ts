import { Question } from '@/models/Question'
import { ForumService } from '@/services/ForumsService'
import { RootState } from '@/store'
import { ActionTree, Commit, Module, MutationTree } from 'vuex'

interface ForumState {
  questions: Question[]
}

const state: ForumState = { questions: [] }
const actions: ActionTree<ForumState, RootState> = {
  async getQuestions ({ commit }: {commit: Commit }) {
    try {
      const response = await ForumService.getQuestions()
      commit('setQuestions', response.data)
      return response.data
    } catch (error: any) {
      throw error.response.data
    }
  },
  async getQuestion (_, questionId: string) {
    try {
      const response = await ForumService.getQuestion(questionId)
      return response.data
    } catch (error: any) {
      throw error.response.data
    }
  },
  async postQuestion (_, question: Question) {
    try {
      const response = await ForumService.postQuestion(question)
      return response.data
    } catch (error: any) {
      throw error.response.data
    }
  },
  async postAnswer (_, { questionId, message }) {
    try {
      const response = await ForumService.postAnswer(questionId, message)
      return response.data
    } catch (error: any) {
      throw error.response.data
    }
  }
}
const mutations: MutationTree<ForumState> = {
  setQuestions (state, payload) { state.questions = payload || [] }
}
const namespaced = true

export const forum: Module<ForumState, RootState> = {
  state,
  actions,
  mutations,
  namespaced
}
