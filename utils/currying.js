/**
 * currying 函数（柯里化函数）
 * 柯里化是一种将使用多个参数的函数转换成一系列使用一个参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术
 * @param {Function} fn 处理函数
 * @param {Number} length 参数长度
 * 
 * 使用例子
 * const fn = currying(function(a, b, c){
 *    return a + b + c
 *   })
 * 
 *   console.log(fn(2, 3)(5)) // 10
 *   console.log(fn(2)(3)(5)) // 10
 *   console.log(fn(2)()(3)(5)) // 10
 *  
 */
module.exports = function currying (fn, length) {
  length = length || fn.length // 第一次调用获取函数 fn 参数的长度，后续调用获取 fn 剩余参数的长度
  return function (...args) { // currying 包裹之后返回一个新函数，接收参数为 ...args
    return args.length >= length // 新函数接收的参数长度是否大于等于 fn 剩余参数需要接收的长度
      ? fn.apply(this, args) // 满足要求，执行 fn 函数，传入新函数的参数
      : currying(fn.bind(this, ...args), length - args.length) // 不满足要求，递归 currying 函数，新的 fn 为 bind 返回的新函数（bind 绑定了 ...args 参数，未执行），新的 length 为 fn 剩余参数的长度
  }
}
