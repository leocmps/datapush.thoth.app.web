import { Question } from '@/models/Question'
import ApiService from './ApiService'

export class ForumService extends ApiService {
  static async getQuestions () {
    return this.httpService.get('/v1/forum/questions')
  }

  static async postQuestion (question: Question) {
    return this.httpService.post('/v1/forum/questions', question)
  }

  static async getQuestion (questionId: string) {
    return this.httpService.get(`/v1/forum/questions/${questionId}`)
  }

  static async putQuestion (questionId: string, question: Question) {
    return this.httpService.put(`/v1/forum/questions/${questionId}`, question)
  }

  static async deleteQuestion (questionId: string) {
    return this.httpService.delete(`/v1/forum/questions/${questionId}`)
  }

  static async postAnswer (questionId: string, message: string) {
    return this.httpService.post(`/v1/forum/${questionId}/answers`, { questionId, message })
  }

  static async putAnswer (questionId: string, message: string) {
    return this.httpService.put(`/v1/forum/${questionId}/answers`, { questionId, message })
  }

  static async deleteAnswer (questionId: string, answerId: string) {
    return this.httpService.delete(`/v1/forum/${questionId}/answers/${answerId}`)
  }
}
