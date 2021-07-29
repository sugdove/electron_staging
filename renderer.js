/*
 * @Author: your name
 * @Date: 2021-07-29 16:02:55
 * @LastEditTime: 2021-07-29 16:24:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \electron-app\rendered.js
 */
const { Notification } = require('electron')

const NOTIFICATION_TITLE = 'Title'

const NOTIFICATION_BODY = 'This is NOTIFICATION_BODY'

const showNotification = () => {
  new Notification ({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}

module.exports = {
  showNotification
}
