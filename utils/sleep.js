/**
 * sleep函数
 * Promise 方式实现
 * @param {Number} [time = 200] 沉睡时间
 * @returns {Promise}
 * 
 * 使用方式一
 * sleep(100).then(_ => {
 *   // do something
 * })
 * 
 * 使用方式二
 * async function fn () {
 *  await sleep(100)
 *  // do something
 * }
 * fn()
 */
 export function sleep (time = 200) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  /**
 * sleep函数
 * Generator 方式实现
 * @param {Number} [time = 200] 沉睡时间
 * @returns {Iterable}
 * 
 * 使用方式
 * sleepGenerator(100).next().value.then(_ => {
 *  // do something
 * })
 */
 export function* sleepGenerator (time = 200) {
    yield new Promise((resolve) => setTimeout(resolve, time))
  }
