const {app, BrowserWindow} = require('electron')

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // Specify entry point to default entry point of vue.js
  win.loadURL('http://localhost:8081');

  // Remove window once app is closed
  win.on('closed', function () {
  win = null;
  });

});
//create the application window if the window variable is null
app.on('activate', () => {
  if (win === null) {
  createWindow()
  }
})

function createWindow () {
  // ...
  return win;
}

//quit the app once closed
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
  app.quit();
  }
});
