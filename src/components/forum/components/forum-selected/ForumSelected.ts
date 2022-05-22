import { Question } from '@/models/Question'
import QuestionEntity from '@/models/QuestionEntity'
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class ForumSelected extends Vue {
  @Action('getQuestion', { namespace: 'forum' })
  readonly getQuestion!: (questionId: string) => Promise<Question>

  @Action('postAnswer', { namespace: 'forum' })
  readonly postAnswer$!: ({ questionId, message }: { questionId: string, message: string}) => Promise<Question>

  inProgress = false
  postAnswerInProgress = false
  currentQuestion = new QuestionEntity()
  answer = ''
  succesIconShare = false

  async created () {
    const questionId = String(this.$route.query.questionId)
    try {
      this.inProgress = true
      this.currentQuestion = await this.getQuestion(questionId)
    } finally {
      this.inProgress = false
    }
  }

  async postAnswer () {
    const questionId = String(this.$route.query.questionId)
    try {
      this.postAnswerInProgress = true
      await this.postAnswer$({ questionId, message: this.answer })
      this.currentQuestion = await this.getQuestion(questionId)
      this.answer = ''
    } finally {
      this.postAnswerInProgress = false
    }
  }

  shareContent () {
    const currentUrl = window.location.href
    navigator.clipboard.writeText(currentUrl)
    this.succesIconShare = true
    setTimeout(() => { this.succesIconShare = false }, 2000)
  }

  backToForum () {
    this.$router.push({ name: 'Forum' }).catch(() => {})
  }
}
