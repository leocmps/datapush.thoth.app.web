import { Course } from '@/models/Course'
import { Segment } from '@/models/Segment'
import moment from 'moment'
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

@Component
export default class Courses extends Vue {
  @Action('getCourses', { namespace: 'courses' })
  readonly getCourses!: () => Promise<Course[]>

  @Action('getSegments', { namespace: 'segments' })
  readonly getSegments!: () => Promise<Segment[]>

  @State('courses', { namespace: 'courses' })
  readonly courses!: Course[]

  @State('segments', { namespace: 'segments' })
  readonly segments!: Segment[]

  getCourseTime (course: Course) {
    return moment.utc(course.duration).format('HH:mm:ss')
  }

  async created () {
    await this.getSegments()
    await this.getCourses()
    document.documentElement.classList.remove('disable-scroll')
  }

  destroyed () {
    document.documentElement.classList.add('disable-scroll')
  }
}
