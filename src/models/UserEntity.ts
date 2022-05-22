import { User } from './User'

export default class UserEntity implements User {
  id?: string;
  name: string;
  document: string;
  password: string;
  email: string;

  constructor () {
    this.id = ''
    this.name = ''
    this.document = ''
    this.password = ''
    this.email = ''
  }
}
