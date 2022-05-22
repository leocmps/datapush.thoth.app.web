import { Question } from './Question'

export default class QuestionEntity implements Question {
  id?: string;
  userId: string;
  userName: string;
  title: string;
  message: string;
  answers: { id: string; message: string; }[];

  constructor () {
    this.id = ''
    this.userId = ''
    this.userName = ''
    this.title = ''
    this.message = ''
    this.answers = []
  }
}
