import { Instructor } from '@/models/Instructor'
import ApiService from './ApiService'

export class InstructorService extends ApiService {
  static async getInstructors () {
    return this.httpService.get('/v1/instructors')
  }

  static async postInstructor (instructor: Instructor) {
    return this.httpService.post('/v1/instructors', instructor)
  }
}
