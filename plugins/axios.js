export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
    config.baseURL = 'https://www.apiopen.top'
    // console.log(process.env.axios)
    // console.log(config)
    // console.log($axios)
    config.timeout = '10000'
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
