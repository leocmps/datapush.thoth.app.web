import ApiService from './ApiService'

export class InstructorService extends ApiService {
  static async getInstructors () {
    return this.httpService.get('/v1/instructors')
  }
}
