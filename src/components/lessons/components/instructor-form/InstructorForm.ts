import { Instructor } from '@/models/Instructor'
import { InstructorEntity } from '@/models/InstructorEntity'
import { Segment } from '@/models/Segment'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

@Component
export default class InstructorForm extends Vue {
  @Action('postInstructor', { namespace: 'instructors' })
  readonly postInstructor$!: (instructor: Instructor) => Promise<string>

  @Action('getSegments', { namespace: 'segments' })
  readonly getSegments!: () => Promise<Segment[]>

  @Action('getInstructors', { namespace: 'instructors' })
  readonly getInstructors!: () => Promise<Instructor[]>

  @State('segments', { namespace: 'segments' })
  readonly segments!: Segment[]

  showMenu = false
  segmentsInProgress = false
  inProgress = false
  currentInstructor = new InstructorEntity()

  @Watch('showMenu')
  async onShowMenuChange () {
    if (!this.showMenu) return
    this.segmentsInProgress = true
    await this.getSegments()
    this.segmentsInProgress = false
  }

  async postInstructor () {
    try {
      this.inProgress = true
      this.currentInstructor.password = 'senha'
      await this.postInstructor$(this.currentInstructor)
      await this.getInstructors()
      this.currentInstructor = new InstructorEntity()
      this.showMenu = false
    } finally {
      this.inProgress = false
    }
  }
}
