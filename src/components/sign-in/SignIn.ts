import { User } from '@/models/User'
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

@Component
export default class SignIn extends Vue {
  @Action('authenticateUser')
  readonly authenticateUser!: (user: User) => Promise<string>

  @Action('getUser')
  readonly getUser!: (userId: string) => Promise<User>

  @State('users')
  readonly users!: User[]

  rules = {
    required: (v: string) => !!v || 'Campo Obrigatório',
    email: (v: string) => Boolean(v.match(EMAIL_REGEX)) || 'Email Inválido'
  }

  email = ''
  password = ''
  showPassword = false
  inProgress = false
  form = false

  async authenticate () {
    try {
      this.inProgress = true
      const userId = await this.authenticateUser({ email: this.email, password: this.password } as User)
      await this.signInUser(userId)
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
