# interview-question

- [1 防抖和节流](https://github.com/LuHong-HL/interview-question/blob/master/utils/util.js)
  + （防抖）：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
  + （节流）：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

- [2 sleep函数](https://github.com/LuHong-HL/interview-question/blob/master/utils/sleep.js)
  + 沉睡程序 转移执行权限

- [3 currying函数](https://github.com/LuHong-HL/interview-question/blob/master/utils/currying.js)
  + 柯里化函数：柯里化是一种将使用多个参数的函数转换成一系列使用一个参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术

- [4 Functino.prototype.softbind 函数](https://github.com/LuHong-HL/interview-question/blob/master/utils/softbind.js)
  + 软绑定函数：可以给函数默认绑定一个this,也可以修改this