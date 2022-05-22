import { Question } from '@/models/Question'
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import ForumDialog from './components/forum-dialog/ForumDialog.vue'
import ForumSelected from './components/forum-selected/ForumSelected.vue'

@Component({
  components: { ForumSelected, ForumDialog }
})
export default class Forum extends Vue {
  @Action('getQuestions', { namespace: 'forum' })
  readonly getQuestions!: () => Promise<Question[]>

  @State('questions', { namespace: 'forum' })
  readonly questions!: Question[]

  searchText = ''
  showDialog = false
  inProgress = false

  async created () {
    this.inProgress = true
    await this.getQuestions()
    this.inProgress = false
  }

  getUserInitials (userName: string) {
    return userName.split(' ').map((s) => s.charAt(0)).join('')
  }

  setForumSelected (question: Question) {
    this.$router.push({ query: { questionId: question.id } }).catch(() => {})
  }

  get questionsFiltered () {
    if (!this.searchText) return this.questions
    return this.questions.filter(q => JSON.stringify(q.message).toLowerCase().includes(this.searchText))
  }

  get hasForumSelected () {
    return !!this.$route.query.questionId
  }
}
