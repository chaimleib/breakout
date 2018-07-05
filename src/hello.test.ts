import { should } from 'fuse-test-runner'
import { hello } from './hello'

export class HelloTest {
  "Should say hello"() {
    should(hello('Mike'))
      .equal('Hello Mike')
  }
}

