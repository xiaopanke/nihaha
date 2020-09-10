import jsonp from 'common/js/jsonp'
import axios from 'axios'
import {commonParams, options} from './config'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}
//
// export function search(query) {
//   const url = 'http://112.126.59.53/api/kugouSearch.php'
//   console.log(query)
//   const data = Object.assign({}, {
//     word: query,
//     ac: 'searchKugou'
//   })
//
//   return jsonp(url, data, options)
// }
export const search = (params) => {
  console.log(params);
  return axios.get(`http://112.126.59.53/api/kugouSearch.php`, {params}).then(res => res.data)
}
