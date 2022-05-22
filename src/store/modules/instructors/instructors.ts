import { Instructor } from '@/models/Instructor'
import { InstructorService } from '@/services/InstructorService'
import { RootState } from '@/store'
import { ActionTree, Commit, Module, MutationTree } from 'vuex'

interface InstructorState {
  instructors: Instructor[]
}

const state: InstructorState = { instructors: [] }
const actions: ActionTree<InstructorState, RootState> = {
  async getInstructors ({ commit }: {commit: Commit }) {
    try {
      const response = await InstructorService.getInstructors()
      commit('setInstructors', response.data)
      return response.data
    } catch (error: any) {
      throw error.response.data
    }
  }
}
const mutations: MutationTree<InstructorState> = {
  setInstructors (state, payload) { state.instructors = payload || [] }
}
const namespaced = true

export const instructors: Module<InstructorState, RootState> = {
  state,
  actions,
  mutations,
  namespaced
}
