import * as assert from 'assert'
import { hello } from './hello'

describe('hello', function() {
  it('Should say hello', function() {
    assert.equal(hello('Mike'), 'Hello Mike')
  })
})

