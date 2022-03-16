import dbConnect from "../../../lib/dbConnect";
import Picture from "../../../models/picture";
import handler from "../../../lib/handler";
import upload from "../../../lib/multer";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler
  .get(async (req, res) => {
    try {
      await dbConnect();
      const pictures = await Picture.find();
      res.status(200).json(pictures);
    } catch (error) {
      res.status(400).json({ error });
    }
  })
  .use(upload.single("picture"))
  .post(async (req, res) => {
    try {
      await dbConnect();
      const { title, description } = req.body;

      await Picture.create({
        title,
        description,
        url: req.file.filename,
      });

      res.status(201).json({ message: "Imagen subida correctamente." });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  });
