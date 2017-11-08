import axios from 'axios'

export default function getPosList(obj, url) {
  axios.get(url)
    .then((res)=>{
      const data = res.data.content.data.page.result
      obj.dataList = data
      obj.isShowloading = false
    })
}
