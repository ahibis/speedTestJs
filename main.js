// Modules to control application life and create native browser window
const { app, BrowserWindow} = require("electron");
const path = require("path");


function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.resolve(__dirname, "assets", "smile.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  //mainWindow.loadURL('https://ahibis.github.io/estimate360/');
  mainWindow.webContents.openDevTools()
}


app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});


app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

