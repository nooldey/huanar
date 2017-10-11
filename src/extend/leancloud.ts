// const AV = require('leancloud-storage')
import AV from 'leancloud-storage'

/* Init Leancloud Storage */
/* NOTE: 将以下的秘钥对修改为你的秘钥对，否则项目无法正常使用 */
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

