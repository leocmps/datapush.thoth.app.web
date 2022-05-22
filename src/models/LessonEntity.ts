import { Lesson } from './Lesson'

export class LessonEntity implements Lesson {
  tittle: string;
  segment: { name: string, color: string };
  date: string;
  url: string;
  instructorName: string;
  instructorId: string;

  constructor () {
    this.tittle = ''
    this.segment = { name: '', color: '' }
    this.date = ''
    this.url = ''
    this.instructorName = ''
    this.instructorId = ''
  }
}
