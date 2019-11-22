import request from '@/utils/request'

export function getStaticState() {
  return request({
    method:'get',
    url: 'https://zhuanyoyo.oss-us-west-1.aliyuncs.com/service/json/staticUpdate.json'
  }) 
}
