import * as express from "express";
import * as path from "path";
import * as fs from "fs";

// Este router sirve imágenes de un directorio local
export const imagesRouter = express.Router();

// Cambia esta ruta al directorio donde están tus imágenes
// const IMAGES_DIR = "D:\\backups\\S24 2024-08-05";
// const IMAGES_DIR = "C:\\data\\test-carousel";
// const IMAGES_DIR = path.join(__dirname, "../../../assets/images");

// Colecciones de imágenes
const collections: Record<string, string> = {
  default: "C:\\data\\test-carousel",
  mine: "C:\\data\\test-carousel-mine",
  "roxane-de-sir":
    "C:\\data\\test-carousel\\[aijuicer] roxanne de desir [AI generated]",
  // Puedes agregar más colecciones aquí, ejemplo:
  // "anime": ["subfolder1/img1.jpg", "subfolder2/img2.png"]
};

imagesRouter.get("/image", (req, res) => {
  const col = (req.query.col as string) || "default";
  const colPath = collections[col] || "";
  if (!colPath) {
    return res.status(404).send("Colección de imágenes no encontrada");
  }
  const imagePath = req.query.q as string;
  if (!imagePath || !/\.(jpg|jpeg|png|webp)$/i.test(imagePath)) {
    return res
      .status(400)
      .send("Tipo de archivo no permitido o parámetro faltante");
  }
  const filePath = path.join(colPath, imagePath);
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Imagen no encontrada");
  }
  res.sendFile(filePath);
});

imagesRouter.get("/", (req, res) => {
  const col = (req.query.col as string) || "default";
  try {
    const dirPath = collections[col] || "";
    if (!dirPath) {
      return res
        .status(404)
        .send("No existe el directorio de imágenes para esta colección");
    }
    const resourceList: string[] = getSupportedFilesRecursive(dirPath, dirPath);
    if (resourceList.length) {
      res.json(resourceList);
    } else {
      res.status(404).send("No hay imágenes disponibles en esta colección");
    }
  } catch (err) {
    res.status(500).send(`No se pudo leer el directorio de imágenes ${col}`);
  }
});

// Función recursiva para obtener archivos soportados en subcarpetas
function getSupportedFilesRecursive(dir: string, baseDir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath).replace(/\\/g, "/");
    if (entry.isDirectory()) {
      results = results.concat(getSupportedFilesRecursive(fullPath, baseDir));
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      results.push(relPath);
    }
  }
  return results;
}
