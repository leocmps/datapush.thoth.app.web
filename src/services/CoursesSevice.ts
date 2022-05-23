import ApiService from './ApiService'

export class CoursesSevice extends ApiService {
  static async getCourses () {
    return this.httpService.get('/v1/courses')
  }
}
