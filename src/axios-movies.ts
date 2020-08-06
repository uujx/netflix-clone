import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '689e1326f6d02f0fa5c4192b415c39b3',
    language: 'zh'
  }
})

export default instance