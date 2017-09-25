// const AV = require('leancloud-storage')
import AV from 'leancloud-storage'

/* Init Leancloud Storage */
const appId = 'jFxubcUYxlt4z3XtDCXit7M7-gzGzoHsz'
const appKey = 'yvxiyhmBz66Xoq0X6hyrww56'

AV.init({
  appId,
  appKey
})

export default AV

// /* Test */

// const TestObject = AV.Object.extend('test')
// const test = new TestObject()
// await test.save({words: 'Hello World!'})

