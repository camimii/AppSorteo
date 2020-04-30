const electron = require('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url = require('url')

let win 

function createWindow()
{
    win = new BrowserWindow ()
    win.setResizable(true) //El usuario puede ajustar el tamaño de la ventana
    win.setMinimumSize(1200,800) //El tamaño mínimo de ventana se establece
    win.maximize() //La ventana abrirá a pantalla completa
    

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow)