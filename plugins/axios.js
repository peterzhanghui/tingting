export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
    config.baseURL = 'https://api.apiopen.top'
    // console.log(process.env.axios)
    // console.log(config)
    // console.log($axios)
    // config.timeout = '10000';
    // Object.assign($axios.defaults.headers.common, {'Cache-Control': 'max-age = 484200'})
    // console.log($axios.defaults.headers.common)
    // debugger
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
