import multer from "multer";
import path from "path";
import fs from "fs";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // Define el tamaño máximo del archivo (2MB)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "./public/storage"; // Directorio donde se guardarán las imágenes

    if (!fs.existsSync(dir)) {
      // Si no existe el directorio, lo creamos
      fs.mkdir(dir, (err) => cb(err, dir));
      return;
    }

    cb(null, dir); // Función de callback que devuelve un directorio
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Función de callback que devuelve un nombre para el archivo
  },
});

export default multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname); // Obtenemos la extensión original del archivo
    const allowedExtensions = /\.(jpg|jpeg|png)/; // Formatos de imagen aceptados

    if (!ext.match(allowedExtensions)) {
      cb(new Error("Only jpg, jpeg and png are allowed!"));
    }

    cb(null, true); // La subida del archivo ha ido bien
  },
});
