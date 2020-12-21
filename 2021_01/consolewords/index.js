var ProgressBar = require('./single-line.js')
// 初始化长度50的实例
var pb = new ProgressBar('下载进度', 50)
// 模拟一个进程
var num = 0, total = 50
function downloading () {
  if (num <= total) {
    // 更新
    pb.render({ completed: num, total: total })
    num++
    // 运行延时
    setTimeout(() => {
      downloading()
    }, 100);
  }
}

downloading()