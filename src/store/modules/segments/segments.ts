import { Segment } from '@/models/Segment'
import { SegmentService } from '@/services/SegmentService'
import { RootState } from '@/store'
import { ActionTree, Commit, Module, MutationTree } from 'vuex'

interface SegmentState {
  segments: Segment[]
}

const state: SegmentState = { segments: [] }
const actions: ActionTree<SegmentState, RootState> = {
  async getSegments ({ commit }: {commit: Commit }) {
    try {
      const response = await SegmentService.getSegments()
      commit('setSegments', response.data)
      return response.data
    } catch (error: any) {
      throw error.response.data
    }
  }
}
const mutations: MutationTree<SegmentState> = {
  setSegments (state, payload) { state.segments = payload || [] }
}
const namespaced = true

export const segments: Module<SegmentState, RootState> = {
  state,
  actions,
  mutations,
  namespaced
}
