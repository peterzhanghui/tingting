import Vuex from 'vuex'
import mutations from './mutations'

/**
 * @var {Object}
 * @desc store 定义
 * @property {Object} login - 登录
 * @property {Object} dialog - 对话框
 * @property {Object} message - 消息提示 （定义成对象是为了避免string类型相同文本多次设置而不被watch）
 * @property {Object} request - 接口请求
 * @property {Object} title - 标题文本 用于QQ内置浏览器下添加自定义导航栏时显示
 * @property {String} default_avator 默认头像 用于头像加载前
 * @property {String} img_after oss 阿里云图片处理后缀
 */
let state = {
  isPc: true, // 默认是pc
  login: {},
  dialog: {},
  message: {},
  request: {},
  title: {},
  default_avator:
    'http://flashfish.oss-cn-hangzhou.aliyuncs.com/CDN/Images/avator/mrtx.png',
  img_after: '?x-oss-process=image/quality,Q_90/format,jpg/resize,w_'
}

const createStore = () => {
  return new Vuex.Store({
    state: state,
    mutations
  })
}

export default createStore
