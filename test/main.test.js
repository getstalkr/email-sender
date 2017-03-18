import test from 'ava'
import listen from 'test-listen'
import request from 'request-promise'
import srv from '../src/main'

let url

test.before(async () => {
  url = await listen(srv)
})
