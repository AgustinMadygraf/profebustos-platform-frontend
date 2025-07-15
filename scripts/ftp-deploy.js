/*
Path: scripts/ftp-deply.js
node scripts/ftp-deploy.js
*/

const fs = require('fs');
require('dotenv').config();
const ftp = require('basic-ftp');

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      secure: false,
    });
    await client.ensureDir('public_html/platform');

    // Limpiar archivos y carpetas existentes en public_html/platform
    try {
      const list = await client.list();
      for (const item of list) {
        if (item.isDirectory) {
          await client.removeDir(item.name);
        } else {
          await client.remove(item.name);
        }
      }
      console.log('Carpeta public_html/platform limpiada correctamente.');
    } catch (err) {
      console.error('Error al limpiar public_html/platform:', err);
    }

    // Subir index.html
    await client.uploadFrom('index.html', 'index.html');

    // Subir img/ al destino 'img'
    if (fs.existsSync('img')) {
      await client.uploadFromDir('img', 'img');
    } else {
      console.log('Carpeta img no existe, se omite la subida de imágenes.');
    }

    // Subir dist/ al destino 'dist', excluyendo dist/js/__tests__
    if (fs.existsSync('dist')) {
      const path = require('path');
      const walkSync = (dir, filelist = []) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const fullPath = path.join(dir, file);
          if (fs.statSync(fullPath).isDirectory()) {
            // Excluir dist/js/__tests__
            if (fullPath.replace(/\\/g, '/').endsWith('dist/js/__tests__')) return;
            walkSync(fullPath, filelist);
          } else {
            filelist.push(fullPath);
          }
        });
        return filelist;
      };
      const filesToUpload = walkSync('dist').filter(f => !f.replace(/\\/g, '/').includes('dist/js/__tests__/'));
      for (const file of filesToUpload) {
        const remotePath = file.replace(/^dist[\\/]/, 'dist/').replace(/\\/g, '/');
        await client.uploadFrom(file, remotePath);
      }
    } else {
      console.log('Carpeta dist no existe, se omite la subida de dist.');
    }

    // Subir assets/css/
    if (fs.existsSync('assets/css')) {
      await client.uploadFromDir('assets/css', 'assets/css');
    } else {
      console.log('Carpeta assets/css no existe, se omite la subida de CSS.');
    }

    // Subir assets/sounds/
    if (fs.existsSync('assets/sounds')) {
      await client.uploadFromDir('assets/sounds', 'assets/sounds');
    } else {
      console.log('Carpeta assets/sounds no existe, se omite la subida de sonidos.');
    }

    console.log('Despliegue FTP completado.');
  } catch (err) {
    console.error('Error en despliegue FTP:', err);
  }
  client.close();
}

deploy();