import { Instructor } from './Instructor'

export class InstructorEntity implements Instructor {
  id?: string;
  name: string;
  password: string;
  segmentId?: string;
  segmentName: string;
  segmentColor: string;

  constructor () {
    this.id = ''
    this.name = ''
    this.password = ''
    this.segmentId = ''
    this.segmentName = ''
    this.segmentColor = ''
  }
}
