import { User } from '@/models/User'
import ApiService from './ApiService'

export class UsersService extends ApiService {
  static async getUsers () {
    return this.httpService.get('/v1/users')
  }

  static async getUser (userId: string) {
    return this.httpService.get(`/v1/users/${userId}`)
  }

  static async authenticateUser (user: User) {
    return this.httpService.post('/v1/users/authenticate', user)
  }

  static async postUser (user: User) {
    return this.httpService.post('/v1/users', user)
  }
}
