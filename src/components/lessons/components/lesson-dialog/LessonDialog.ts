import { Instructor } from '@/models/Instructor'
import { Lesson } from '@/models/Lesson'
import { LessonEntity } from '@/models/LessonEntity'
import { Segment } from '@/models/Segment'
import moment from 'moment'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import InstructorForm from '../instructor-form/InstructorForm.vue'

@Component({
  components: { InstructorForm }
})
export default class LessonDialog extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly value!: boolean

  @Action('postLesson', { namespace: 'lessons' })
  readonly postLesson$!: (lesson: Lesson) => Promise<string>

  @Action('getSegments', { namespace: 'segments' })
  readonly getSegments!: () => Promise<Segment[]>

  @Action('getInstructors', { namespace: 'instructors' })
  readonly getInstructors!: () => Promise<Instructor[]>

  @State('segments', { namespace: 'segments' })
  readonly segments!: Segment[]

  @State('instructors', { namespace: 'instructors' })
  readonly instructors!: Instructor[]

  @Watch('value')
  async onValueChange () {
    if (!this.value) return
    await this.getSegments()
    await this.getInstructors()
  }

  inProgress = false
  date = ''
  hour = ''
  currentLesson = new LessonEntity()

  async created () {
    await this.getSegments()
    await this.getInstructors()
  }

  async postLesson () {
    try {
      this.inProgress = true
      await this.postLesson$({ ...this.currentLesson, date: moment(`${this.date}T${this.hour}`, 'DD/MM/YYYYTHH:mm').format('YYYY-MM-DDTHH:mm') })
      this.clearData()
    } finally {
      this.inProgress = false
    }
  }

  async emitInput ($event: boolean) {
    if (!$event) this.clearData()
    this.$emit('input', $event)
  }

  clearData () {
    this.currentLesson = new LessonEntity()
    this.date = ''
    this.hour = ''
  }
}
