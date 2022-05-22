import { User } from '@/models/User'
import UserEntity from '@/models/UserEntity'
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

@Component
export default class SignUp extends Vue {
  @Action('postUser')
  readonly postUser!: (user: User) => Promise<string>

  @Action('getUser')
  readonly getUser!: (userId: string) => Promise<User>

  currentUser = new UserEntity()
  showPassword = false
  inProgress = false
  form = false

  rules = {
    required: (v: string) => !!v || 'Campo Obrigatório',
    email: (v: string) => Boolean(v.match(EMAIL_REGEX)) || 'Email Inválido'
  }

  $refs!: any

  clear () {
    this.currentUser = new UserEntity()
    this.$refs.form.resetValidation()
  }

  async send () {
    try {
      this.inProgress = true
      const userId = await this.postUser(this.currentUser)
      this.signInUser(userId)
    } finally {
      this.inProgress = false
    }
  }

  async signInUser (userId: string) {
    if (!userId) return
    await this.getUser(userId)
    this.$router.push({ name: 'Home' }).catch(() => {})
  }
}
