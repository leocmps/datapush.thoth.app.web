import { Lesson } from '@/models/Lesson'
import ApiService from './ApiService'

export class LessonsService extends ApiService {
  static async getLessons () {
    return this.httpService.get('/v1/lessons')
  }

  static async getLesson (lessonId: string) {
    return this.httpService.get(`/v1/lessons/${lessonId}`)
  }

  static async postLesson (lesson: Lesson) {
    return this.httpService.post('/v1/lessons', lesson)
  }
}
