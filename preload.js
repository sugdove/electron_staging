/*
 * @Author: your name
 * @Date: 2021-07-29 13:45:56
 * @LastEditTime: 2021-07-29 13:46:17
 * @LastEditors: Please set LastEditors
 * @Description: 预加载脚本
 * @FilePath: \electron-app\preload.js
 */
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})