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

  segmentSelected: Segment = { id: '', name: '', color: '' }
  searchText = ''
  inProgress = false

  getCourseTime (course: Course) {
    return moment(new Date().getTime()).hours(0).minutes(course.duration).format('hh:mm')
  }

  setSegmentSelected (segment: Segment) {
    if (segment.id === this.segmentSelected.id) this.segmentSelected = { id: '', name: '', color: '' }
    else this.segmentSelected = segment
  }

  accessCourse (course: Course) {
    window.open(course.url, '_blank')
  }

  async created () {
    this.inProgress = true
    await this.getSegments()
    await this.getCourses()
    document.documentElement.classList.remove('disable-scroll')
    this.inProgress = false
  }

  destroyed () {
    document.documentElement.classList.add('disable-scroll')
  }

  filterBySearchText (courses: Course[]) {
    return courses.filter((c) => {
      const searchText = this.searchText.toLowerCase()
      return JSON.stringify(c.name).toLowerCase().includes(searchText)
    })
  }

  filterBySegment (courses: Course[]) {
    return courses.filter((c) => c.segmentId === this.segmentSelected.id)
  }

  get coursesFiltered () {
    let courses = this.courses
    if (this.searchText.replace(/\s/g, '')) courses = this.filterBySearchText(courses)
    if (this.segmentSelected.id) courses = this.filterBySegment(courses)
    return courses
  }
}
