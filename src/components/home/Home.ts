import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class Home extends Vue {
  @Getter('hasUserLogged')
  readonly hasUserLogged!: boolean

  navigationHandler () {
    if (this.hasUserLogged) this.$router.push({ name: 'Courses' })
    else this.$router.push({ name: 'SignIn' })
  }
}
