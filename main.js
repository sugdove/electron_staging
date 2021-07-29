/*
 * @Author: your name
 * @Date: 2021-07-29 11:29:16
 * @LastEditTime: 2021-07-29 15:33:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \electron-app\main.js
 */

const { app, BrowserWindow } = require('electron')
const path = require('path')
const createWindow = async() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // const html = await axios.get('https://github.com/').then(res=> Promise.resolve(res.data)).catch(err => Promise.reject(err))

  // fs.writeFileSync('github.html', html)
  
  win.loadFile('./build/index.html')
}

app.whenReady().then(() => {
  createWindow()

  // 实现如果没有窗口则打开一个窗口
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 关闭所有窗口时退出所有应用(排除在macOs darwin 条件)
app.on('window-all-closed', function() {
  console.log(1)
  if (process.platform !== 'darwin') app.quit()
})

