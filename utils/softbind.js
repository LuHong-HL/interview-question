/**
 * 软绑定
 * 
 * 例子
 * const softFn = fn.softbind(obj, params)
 * softFn()
 * softFn.aplay(newObj)
 * 
 */

module.exports = (function () {
    if (!Function.prototype.softbind) {
        Function.prototype.softbind = function (obj) { // 软的this
            const fn = this
            const args = Array.prototype.slice(arguments, 1) // 其他参数
            const bound = function () {
                return fn.apply(
                    (!this || (this === (window || global))) ? obj : this,
                    args.concat.apply(args, arguments) 
                )
            }
            bound.prototype = Object.create(fn.prototype)
            return bound
        }
    }
})()
