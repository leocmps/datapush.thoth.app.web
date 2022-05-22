import { Lesson } from '@/models/Lesson'
import moment from 'moment'
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import LessonDialog from './components/LessonDialog.vue'

@Component({
  components: { LessonDialog }
})
export default class Lessons extends Vue {
  @Action('getLessons', { namespace: 'lessons' })
  readonly getLessons!: () => Promise<Lesson[]>

  @State('lessons', { namespace: 'lessons' })
  readonly lessons!: Lesson[]

  showDialog = false
  inProgress = false

  async created () {
    this.inProgress = true
    await this.getLessons()
    this.inProgress = false
  }

  getInstructorInitials (instructorName: string) {
    return instructorName.split(' ').map((s) => s.charAt(0)).join('')
  }

  getLessonDate (dateTime: string) {
    return moment(dateTime).format('DD/MM/YYYY')
  }

  getLessonHour (dateTime: string) {
    return moment(dateTime).format('HH:mm')
  }

  accessLesson (lesson: Lesson) {
    window.open(lesson.url, '_blank')
  }
}
