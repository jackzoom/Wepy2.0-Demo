"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var formatTime = function formatTime(date) {
  date = new Date(date);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}; // 获取年月日时分秒


var formatChinaTime = function formatChinaTime(date) {
  var isFullTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  // console.log(date)
  date = new Date(date);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var date = date.getDate();
  year = year.toString();
  month = month > 9 ? month : "0" + month;
  date = date > 9 ? date : "0" + date;
  hours = hours > 9 ? hours : "0" + hours;
  minutes = minutes > 9 ? minutes : "0" + minutes;

  if (isFullTime) {
    return year + "年" + month + "月" + date + "日 " + hours + "点" + minutes + '分';
  } else {
    return year + "年" + month + "月" + date + "日 ";
  }
}; //获取指定天数

/**
 * 
 * @param {date} today 
 * @param {number} addDayCount 
 */


var getAssignDate = function getAssignDate(today, addDayCount) {
  var dd;

  if (today) {
    dd = new Date(today);
  } else {
    dd = new Date();
  }

  dd.setDate(dd.getDate() + addDayCount); //获取AddDayCount天后的日期 

  var y = dd.getFullYear();
  var m = dd.getMonth() + 1; //获取当前月份的日期 

  var d = dd.getDate();

  if (m < 10) {
    m = '0' + m;
  }

  ;

  if (d < 10) {
    d = '0' + d;
  }

  ;
  return y + "-" + m + "-" + d;
};
/**
 * 获取时间相隔天数
 * 结果小于0 -> 过期(筛选到秒)
 * EG: begin = 2018/03/03 12:00:00
 *     endtime = 2018/03/03 12:00:00 
 *     结果为-1
 */


var getTimeRange = function getTimeRange(begin, endtime) {
  if (begin) {
    begin = new Date(begin);
  } else {
    begin = new Date();
  }

  var ds = 0;
  var days = new Date(endtime).getTime() - begin.getTime();
  var day = parseInt(days / (1000 * 60 * 60 * 24));

  if (day < 1) {
    ds = Math.floor(days / (1000 * 60 * 60) / 24);
    /*小于1天返回距离当前时间小时数||分钟数  */
  } else {
    ds = day;
  }

  return ds;
};
/**
 * 获取时区当前时间
 * @param {String} offset 
 */


var getZoneTime = function getZoneTime(time, offset) {
  time = isNaN(time) && !isNaN(Date.parse(time)) ? time.replace(/\-/g, '/') : new Date(); // 取本地时间

  var localtime = new Date(time); // 取本地毫秒数

  var localmesc = localtime.getTime(); // 取本地时区与格林尼治所在时区的偏差毫秒数

  var localOffset = localtime.getTimezoneOffset() * 60000; // 反推得到格林尼治时间

  var utc = localOffset + localmesc; // 得到指定时区时间

  var calctime = utc + 3600000 * offset;
  var nd = new Date(calctime);
  return nd.toDateString() + " " + nd.getHours() + ":" + nd.getMinutes() + ":" + nd.getSeconds();
}; //小于10的格式化函数


var timeFormat = function timeFormat(param) {
  return param < 10 ? '0' + param : param;
};
/**
 * 返回时间差 Array
 * @params:
 *          beginTime:String //开始时间
 *          endTime:String //结束时间
 */


var getDistanceTime = function getDistanceTime(end) {
  var newTime = new Date().getTime();
  var endTime = new Date(end).getTime();
  var obj = null; // 如果活动未结束，对时间进行处理

  if (endTime - newTime > 0) {
    var time = (endTime - newTime) / 1000; // 获取天、时、分、秒

    var day = parseInt(time / (60 * 60 * 24));
    var hou = parseInt(time % (60 * 60 * 24) / 3600);
    var min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
    var sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
    obj = {
      day: timeFormat(day),
      hou: timeFormat(hou),
      min: timeFormat(min),
      sec: timeFormat(sec)
    };
  } else {
    //活动已结束，全部设置为'00'
    this.isDone = true;
    obj = {
      day: '00',
      hou: '00',
      min: '00',
      sec: '00'
    };
  }

  return obj;
}; //JS继承对象属性


var extend = function extend() {
  var length = arguments.length;
  var target = arguments[0] || {};

  if (_typeof(target) != "object" && typeof target != "function") {
    target = {};
  }

  if (length == 1) {
    target = this;
    i--;
  }

  for (var i = 1; i < length; i++) {
    var source = arguments[i];

    for (var key in source) {
      // 使用for in会遍历数组所有的可枚举属性，包括原型。
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}; //过滤空对象属性


var checkParam = function checkParam(params) {
  var data = {};

  for (var i in params) {
    if (util.isNotEmpty(params[i])) {
      data[i] = params[i];
    }
  }

  return data;
}; // 获取当前页面路径及参数


var getCurrentUrl = function getCurrentUrl() {
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  var url = currentPage.route;
  var options = currentPage.options;
  var urlWithArgs = "/".concat(url, "?");

  for (var key in options) {
    var value = options[key];
    urlWithArgs += "".concat(key, "=").concat(value, "&");
  }

  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1);
  return urlWithArgs;
};
/**
 * 获取当前页面参数 params对象
 * @param {string} key  为传参时返回第一个参数的val
 * @param {callback} fn 
 * 
 */


var getCurrentQueryData = function getCurrentQueryData(key, fn) {
  var strs = this.getCurrentUrl();

  if (/\?/.test(strs) == false) {
    return false;
  }

  var paramsArr = strs.split('?')[1].split('&'),
      paramsObj = {}; // firstVal = null

  paramsArr.forEach(function (item, index) {
    var vals = item.split('=');
    paramsObj["".concat(vals[0])] = vals[1]; // firstVal = index == 0 ? vals : firstVal
  });

  if (typeof fn == 'function') {
    // let obbs = new Object();
    // obbs[key] = firstVal[1];
    return key ? fn.call(fn, paramsObj[key]) : fn.call(fn, paramsObj);
  }

  return key ? paramsObj[key] : paramsObj;
};
/**
 * 数据库时间转换
 * 
 */


var patternTime = function patternTime() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1970/01/01T00:00:00.000+0000';
  var fmt = arguments.length > 1 ? arguments[1] : undefined;
  str = str.replace(/\-/g, "/");
  var times = new Date(str);
  var o = {
    "M+": times.getMonth() + 1,
    //月份
    "d+": times.getDate(),
    //日
    "h+": times.getHours() % 12 == 0 ? 12 : times.getHours() % 12,
    //小时
    "H+": times.getHours(),
    //小时
    "m+": times.getMinutes(),
    //分
    "s+": times.getSeconds(),
    //秒
    "q+": Math.floor((times.getMonth() + 3) / 3),
    //季度    
    "S": times.getMilliseconds() //毫秒    

  };
  var week = {
    "0": "\u65E5",
    "1": "\u4E00",
    "2": "\u4E8C",
    "3": "\u4E09",
    "4": "\u56DB",
    "5": "\u4E94",
    "6": "\u516D"
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (times.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "\u661F\u671F" : "\u5468" : "") + week[times.getDay() + ""]);
  }

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }

  return fmt;
};
/**
 * 防抖
 * @param {Function} func 
 * @param {Number} wait 
 */


var debounce = function debounce(func, wait) {
  var times;
  return function () {
    clearTimeout(times);
    func.apply(this, arguments);
    times = setTimeout(func, wait);
  };
};
/**
 * 节流
 * @param {Function} func 
 * @param {Number} wait 
 */


var throttle = function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500;
  }

  var _lastTime = null; // 返回新的函数

  return function () {
    var _nowTime = +new Date();

    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments); //将this和参数传给原函数

      _lastTime = _nowTime;
    }
  };
};
/**
 * 对象排序
 * @param {String} propertyName  排序属性
 * @param {boolean} isSeq false:由小到 true:从大到小
 */


var objCompare = function objCompare(propertyName) {
  var isSeq = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];

    if (isSeq) {
      if (value2 < value1) {
        return -1;
      } else if (value2 > value1) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (value2 > value1) {
        return -1;
      } else if (value2 < value1) {
        return 1;
      } else {
        return 0;
      }
    }
  };
}; //Object转换成URL Query String (不包含开头?)


var changeParams = function changeParams(objOptions) {
  var str = '';
  Object.keys(objOptions).forEach(function (item, i) {
    var values = objOptions[item];

    if (_typeof(item) == 'object') {
      values = JSON.stringify(item);
    }

    str += item + '=' + values + '&';
  });
  return str.slice(0, -1);
}; //获取Router历史地址


var getHistoryUrlData = function getHistoryUrlData() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var pages = getCurrentPages();
  var currPage = null;

  if (pages.length) {
    // 获取当前页面的前以页面的对象
    currPage = pages[pages.length - (1 + count)];
  } // 获取当前页面的前一页面的路由


  return currPage;
}; //获取数组中的对象某个属性值数据

/**
 * 
 * @param {Array} data 
 * @param {String} value 
 * @param {String} attr 
 */


var getArrayForAttrData = function getArrayForAttrData(data, value, attr) {
  var dest = {},
      idx = '';

  try {
    if (Object.prototype.toString.call(data) === '[object Array]') {
      data.forEach(function (item, index) {
        item[attr] == value && function () {
          dest = item;
          idx = index;
        }();
      });
    }
  } catch (err) {
    throw new Error(err);
  }

  return {
    data: dest,
    index: idx
  };
}; //给系统对象加一个扩展函数： 


Array.prototype.contains = function (obj) {
  var index = this.length;

  while (index--) {
    if (this[index] === obj) {
      return true;
    }
  }

  return false;
}; //Object转CSS行内样式


var exportStyle = function exportStyle() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var str = '';
  Object.keys(params).forEach(function (item, index) {
    // console.log(item, index);
    str += item + ":" + params[item] + ";";
  });
  return str;
}; //小数点保留位数


var toFixed = function toFixed() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var n = arguments.length > 1 ? arguments[1] : undefined;
  n = n ? parseInt(n) : 0;

  if (n <= 0) {
    return Math.round(number);
  }

  number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n); //四舍五入

  number = Number(number).toFixed(n); //补足位数

  return number;
};

module.exports = {
  formatTime: formatTime,
  formatChinaTime: formatChinaTime,
  getDistanceTime: getDistanceTime,
  extend: extend,
  checkParam: checkParam,
  getCurrentUrl: getCurrentUrl,
  getCurrentQueryData: getCurrentQueryData,
  patternTime: patternTime,
  debounce: debounce,
  throttle: throttle,
  objCompare: objCompare,
  changeParams: changeParams,
  getArrayForAttrData: getArrayForAttrData,
  getHistoryUrlData: getHistoryUrlData,
  getTimeRange: getTimeRange,
  getZoneTime: getZoneTime,
  exportStyle: exportStyle,
  toFixed: toFixed
};