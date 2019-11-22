const formatTime = date => {
  date = new Date(date);
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



// 获取年月日时分秒
const formatChinaTime = (date, isFullTime = true) => {
  // console.log(date)
  date = new Date(date)
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var date = date.getDate()
  year = year.toString()
  month = month > 9 ? month : "0" + month
  date = date > 9 ? date : "0" + date
  hours = hours > 9 ? hours : "0" + hours
  minutes = minutes > 9 ? minutes : "0" + minutes
  if (isFullTime) {
    return year + "年" + month + "月" + date + "日 " + hours + "点" + minutes + '分'
  } else {
    return year + "年" + month + "月" + date + "日 "
  }

}

//获取指定天数
/**
 * 
 * @param {date} today 
 * @param {number} addDayCount 
 */
const getAssignDate = function (today, addDayCount) {
  var dd
  if (today) {
    dd = new Date(today)
  } else {
    dd = new Date()
  }
  dd.setDate(dd.getDate() + addDayCount) //获取AddDayCount天后的日期 
  var y = dd.getFullYear()
  var m = dd.getMonth() + 1 //获取当前月份的日期 
  var d = dd.getDate()
  if (m < 10) {
    m = '0' + m
  };
  if (d < 10) {
    d = '0' + d
  };
  return y + "-" + m + "-" + d
}
/**
 * 获取时间相隔天数
 * 结果小于0 -> 过期(筛选到秒)
 * EG: begin = 2018/03/03 12:00:00
 *     endtime = 2018/03/03 12:00:00 
 *     结果为-1
 */
const getTimeRange = function (begin, endtime) {
  if (begin) {
    begin = new Date(begin)
  } else {
    begin = new Date()
  }
  var ds = 0
  var days = new Date(endtime).getTime() - begin.getTime();
  var day = parseInt(days / (1000 * 60 * 60 * 24))
  if (day < 1) {
    ds = Math.floor(days / (1000 * 60 * 60) / 24); /*小于1天返回距离当前时间小时数||分钟数  */
  } else {
    ds = day
  }
  return ds
}

/**
 * 获取时区当前时间
 * @param {String} offset 
 */
const getZoneTime = function (time, offset) {
  time = isNaN(time) && !isNaN(Date.parse(time)) ? time.replace(/\-/g, '/') : new Date()
  // 取本地时间
  var localtime = new Date(time)
  // 取本地毫秒数
  var localmesc = localtime.getTime()
  // 取本地时区与格林尼治所在时区的偏差毫秒数
  var localOffset = localtime.getTimezoneOffset() * 60000
  // 反推得到格林尼治时间
  var utc = localOffset + localmesc
  // 得到指定时区时间
  var calctime = utc + (3600000 * offset)
  var nd = new Date(calctime)
  return nd.toDateString() + " " + nd.getHours() + ":" + nd.getMinutes() + ":" + nd.getSeconds()
}

//小于10的格式化函数
const timeFormat = function (param) {
  return param < 10 ? '0' + param : param
}



/**
 * 返回时间差 Array
 * @params:
 *          beginTime:String //开始时间
 *          endTime:String //结束时间
 */

const getDistanceTime = function (end) {
  let newTime = new Date().getTime()
  let endTime = new Date(end).getTime()
  let obj = null
  // 如果活动未结束，对时间进行处理
  if (endTime - newTime > 0) {
    let time = (endTime - newTime) / 1000
    // 获取天、时、分、秒
    let day = parseInt(time / (60 * 60 * 24))
    let hou = parseInt(time % (60 * 60 * 24) / 3600);
    let min = parseInt(time % (60 * 60 * 24) % 3600 / 60)
    let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60)
    obj = {
      day: timeFormat(day),
      hou: timeFormat(hou),
      min: timeFormat(min),
      sec: timeFormat(sec)
    }
  } else { //活动已结束，全部设置为'00'
    this.isDone = true;
    obj = {
      day: '00',
      hou: '00',
      min: '00',
      sec: '00'
    }
  }
  return obj
}

//JS继承对象属性
const extend = function () {
  var length = arguments.length;
  var target = arguments[0] || {};
  if (typeof target != "object" && typeof target != "function") {
    target = {}
  }
  if (length == 1) {
    target = this
    i--;
  }
  for (var i = 1; i < length; i++) {
    var source = arguments[i]
    for (var key in source) {
      // 使用for in会遍历数组所有的可枚举属性，包括原型。
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }

    }
  }
  return target
}

//过滤空对象属性
const checkParam = function (params) {
  var data = {}
  for (var i in params) {
    if (util.isNotEmpty(params[i])) {
      data[i] = params[i]
    }
  }
  return data;
}


// 获取当前页面路径及参数
const getCurrentUrl = function () {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const url = currentPage.route
  const options = currentPage.options
  let urlWithArgs = `/${url}?`
  for (let key in options) {
    const value = options[key]
    urlWithArgs += `${key}=${value}&`
  }
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
  return urlWithArgs
}

/**
 * 获取当前页面参数 params对象
 * @param {string} key  为传参时返回第一个参数的val
 * @param {callback} fn 
 * 
 */
const getCurrentQueryData = function (key, fn) {
  const strs = this.getCurrentUrl()
  if (/\?/.test(strs) == false) {
    return false
  }
  let paramsArr = strs.split('?')[1].split('&'),
    paramsObj = {};
  // firstVal = null
  paramsArr.forEach((item, index) => {
    let vals = item.split('=')
    paramsObj[`${vals[0]}`] = vals[1]
    // firstVal = index == 0 ? vals : firstVal
  })
  if (typeof fn == 'function') {
    // let obbs = new Object();
    // obbs[key] = firstVal[1];
    return key ? fn.call(fn, paramsObj[key]) : fn.call(fn, paramsObj)
  }
  return key ? paramsObj[key] : paramsObj
}

/**
 * 数据库时间转换
 * 
 */
const patternTime = function (str = '1970/01/01T00:00:00.000+0000', fmt) {
  str = str.replace(/\-/g, "/");
  const times = new Date(str);
  var o = {
    "M+": times.getMonth() + 1, //月份
    "d+": times.getDate(), //日
    "h+": times.getHours() % 12 == 0 ? 12 : times.getHours() % 12, //小时
    "H+": times.getHours(), //小时
    "m+": times.getMinutes(), //分
    "s+": times.getSeconds(), //秒
    "q+": Math.floor((times.getMonth() + 3) / 3), //季度    
    "S": times.getMilliseconds() //毫秒    
  };
  var week = {
    "0": "\u65e5",
    "1": "\u4e00",
    "2": "\u4e8c",
    "3": "\u4e09",
    "4": "\u56db",
    "5": "\u4e94",
    "6": "\u516d"
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (times.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[times.getDay() + ""]);
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
};

/**
 * 防抖
 * @param {Function} func 
 * @param {Number} wait 
 */
const debounce = function (func, wait) {
  let times
  return function () {
    clearTimeout(times);
    func.apply(this, arguments);
    times = setTimeout(func, wait);
  };
}

/**
 * 节流
 * @param {Function} func 
 * @param {Number} wait 
 */
const throttle = function (fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500
  }

  let _lastTime = null

  // 返回新的函数
  return function () {
    let _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments) //将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
}


/**
 * 对象排序
 * @param {String} propertyName  排序属性
 * @param {boolean} isSeq false:由小到 true:从大到小
 */

const objCompare = (propertyName, isSeq = 0) => {
  return function (object1, object2) {
    var value1 = object1[propertyName]
    var value2 = object2[propertyName]
    if (isSeq) {
      if (value2 < value1) {
        return -1
      } else if (value2 > value1) {
        return 1
      } else {
        return 0
      }
    } else {
      if (value2 > value1) {
        return -1
      } else if (value2 < value1) {
        return 1
      } else {
        return 0
      }
    }


  }
}

//Object转换成URL Query String (不包含开头?)
const changeParams = (objOptions) => {
  let str = ''
  Object.keys(objOptions).forEach((item, i) => {
    let values = objOptions[item]
    if (typeof item == 'object') {
      values = JSON.stringify(item)
    }
    str += item + '=' + values + '&'
  })
  return str.slice(0, -1)
}

//获取Router历史地址

const getHistoryUrlData = (count = 0) => {
  let pages = getCurrentPages()
  let currPage = null
  if (pages.length) {
    // 获取当前页面的前以页面的对象
    currPage = pages[pages.length - (1 + count)]
  }
  // 获取当前页面的前一页面的路由
  return currPage
}

//获取数组中的对象某个属性值数据
/**
 * 
 * @param {Array} data 
 * @param {String} value 
 * @param {String} attr 
 */
const getArrayForAttrData = (data, value, attr) => {
  let dest = {},
    idx = ''
  try {
    if (Object.prototype.toString.call(data) === '[object Array]') {
      data.forEach((item, index) => {
        item[attr] == value && (() => {
          dest = item
          idx = index
        })()
      })
    }
  } catch (err) {
    throw new Error(err)
  }
  return {
    data: dest,
    index: idx
  }
}


//给系统对象加一个扩展函数： 
Array.prototype.contains = function (obj) {
  var index = this.length
  while (index--) {
    if (this[index] === obj) {
      return true
    }
  }
  return false
}

//Object转CSS行内样式
const exportStyle = (params = {}) => {
  let str = ''
  Object.keys(params).forEach((item, index) => {
    // console.log(item, index);
    str += item + ":" + params[item] + ";"
  })
  return str
}

//小数点保留位数
const toFixed = function (number = '', n) {
  n = n ? parseInt(n) : 0;
  if (n <= 0) {
    return Math.round(number);
  }
  number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n); //四舍五入
  number = Number(number).toFixed(n); //补足位数
  return number;
}

module.exports = {
  formatTime,
  formatChinaTime,
  getDistanceTime,
  extend,
  checkParam,
  getCurrentUrl,
  getCurrentQueryData,  
  patternTime,
  debounce,
  throttle,
  objCompare,
  changeParams,
  getArrayForAttrData,
  getHistoryUrlData,
  getTimeRange,
  getZoneTime,
  exportStyle,
  toFixed
}
