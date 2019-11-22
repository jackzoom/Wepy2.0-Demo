import utils from '@/utils/index'
const service = function (options) {
  return new Promise((resolve, reject) => {
    let defaults = {
      url: '',
      method: 'get',
      success: function (res) {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail: function (err) {
        reject(err)
      }
    }
    let opts = utils.extend(defaults, options);
    wx.request(opts)
  })
};

export default service
