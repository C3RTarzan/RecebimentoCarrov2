const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    icon: './assets/icon/icon.ico' // Caminho para o ícone personalizado
  });

  mainWindow.maximize();
  mainWindow.loadFile('index.html');

  // Crie o menu de aplicativo personalizado
  const template = [
    {
      label: 'Opções',
      submenu: [
        {
          label: 'Recarregar',
          accelerator: 'F5',
          click: () => {
            mainWindow.reload();
          }
        },
        {
          label: 'Zoom +',
          accelerator: 'CommandOrControl+=',
          click: () => {
            mainWindow.webContents.zoomFactor += 0.1;
          }
        },
        {
          label: 'Zoom -',
          accelerator: 'CommandOrControl+-',
          click: () => {
            mainWindow.webContents.zoomFactor -= 0.1;
          }
        },
        {
          label: 'Ajuda',
          accelerator: 'F1',
          click: () => {
            // Abrir a página de ajuda em uma nova janela
            const helpWindow = new BrowserWindow({
              width: 800,
              height: 600,
              webPreferences: {
                nodeIntegration: true
              }
            });

            helpWindow.setMenu(null);
            helpWindow.loadFile('./components/help.html');
          }
        },
        {
          label: 'Sair',
          accelerator: 'CmdOrCtrl+Q',
          click: function () {
            app.quit();
          }
        },
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // ...

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
