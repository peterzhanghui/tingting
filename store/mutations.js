const mutations = {
  /**
   * 对话框
   * @param {Object} data - 设置对话框参数
   * 例 {
   *      title: "提示",
   *      content: '内容',
   *      button: [{
   *          text: "确定",
   *          color: "#0076FF",
   *          callback: () => {}
   *      }]
   * }
   */
  dialog(state, data) {
    state.modalParams = data
  },
  /**
   * 消息提醒
   * @param {String} text - 消息文本
   */
  message(state, text) {
    state.message = text
  },
  /**
   * 设置接口请求时
   * @param {Object} data
   * 例 {
   *      status: true,
   *      text: '加载中'
   * }
   */
  apiRequest(state, data) {
    state.request = data
  },
  /**
   * 标题设置
   * @param {String} text - 标题文本
   */
  setTitle(state, text) {
    state.title = text
  },
  /**
   * 终端判断是pc还是手机
   * @param {boolean} text - 是否是pc端
   */
  setPc(state, text) {
    state.isPc = text
  }
}

export default mutations
