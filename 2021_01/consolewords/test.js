const log = console.log.bind(console)
const timeDelay = (delayTime) => {
  let time = new Date()
  while (true) {
    var tStart = new Date()  // 执行时间差值大于规定延时，终止
    if (tStart.getTime() - time.getTime() > Number(delayTime)) {
      console.log(tStart, time)
      break
    }
  }
}

const func = () => {
  console.log('开始执行时间:' + new Date().toLocaleTimeString());
  timeDelay(2000) // 6s
  console.log('结束执行时间:' + new Date().toLocaleTimeString())
}

// 测试setInterval
setInterval(() => {
  func()
}, 200);

// 测试setTimeout
// setTimeout(() => {
//   func()
//   setTimeout(() => {
//     arguments.callee
//     console.log(arguments.callee);
//   }, 200);
// }, 200);
