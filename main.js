const {app, BrowserWindow} = require('electron')

function createWindow(){
    const win = new BrowserWindow({
      height: 500,
      width: 650,
      icon: __dirname + '/asset/win.ico',
      webPreferences: {
          nodeIntegration: true
      }
    })

    win.loadFile('web/index.html')
    win.setResizable(false)
    //win.webContents.openDevTools()
    win.removeMenu()
    //win.maximize()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})