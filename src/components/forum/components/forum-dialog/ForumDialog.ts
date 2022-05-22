import { Question } from '@/models/Question'
import QuestionEntity from '@/models/QuestionEntity'
import { User } from '@/models/User'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

@Component
export default class ForumDialog extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly value!: boolean

  @Action('postQuestion', { namespace: 'forum' })
  readonly postQuestion$!: (question: Question) => Promise<string>

  @Action('getQuestions', { namespace: 'forum' })
  readonly getQuestions!: () => Promise<Question[]>

  @State('user')
  readonly user!: User

  currentQuestion = new QuestionEntity()
  inProgress = false

  async postQuestion () {
    try {
      this.inProgress = true
      this.currentQuestion.userId = this.user.id!
      await this.postQuestion$(this.currentQuestion)
      await this.getQuestions()
      this.currentQuestion = new QuestionEntity()
    } finally {
      this.inProgress = false
    }
  }
}
