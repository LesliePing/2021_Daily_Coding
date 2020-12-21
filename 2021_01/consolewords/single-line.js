// npm模块导入，打印单行文本
var slog = require('single-line-log').stdout
var chalk = require('chalk')
// ProgressBar工具
function ProgressBar (description, bar_length) {
  this.description = description || 'Progress' // 开头文字信息
  this.length = bar_length || 25
  /* 刷新进度条图案或文字 */
  this.render = function (opts) {
    var i = 1
    i++
    var percent = (opts.completed / opts.total).toFixed(4)
    var cell_num = Math.floor(percent * this.length)
    // 拼接绿色条
    var cell = ''
    for (var i = 0; i <= cell_num; i++) {
      cell += '█'
      // 拼接灰色条
      var empty = ''
      for (var j = 0; j < this.length - i; j++) {
        empty += '░'
      }
    }
    //  占位符处理
    var percentage = (100 * percent).toFixed(2)
    var colonPlus
    switch (percentage.toString().length) {
      case 4:
        colonPlus = ':  '
        break;
      case 5:
        colonPlus = ': '
        break;
      case 6:
        colonPlus = ':'
        break;
    }
    var cmdText = this.description + colonPlus + percentage + '% ' + chalk.green(cell) + empty + (opts.completed > 9 ? ' ' : '  ') + opts.completed + '/' + opts.total
    slog(cmdText.trim())
    slog.clear()
  }
}


module.exports = ProgressBar