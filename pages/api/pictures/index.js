import dbConnect from "../../../lib/dbConnect";
import Picture from "../../../models/picture";
import handler from "../../../lib/handler";
import upload from "../../../lib/upload";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler
  .get(async (req, res) => {
    await dbConnect();
    try {
      const pictures = await Picture.find();
      res.status(200).json({ pictures });
    } catch (error) {
      res.status(400).json({ error });
    }
  })
  .use(upload.single("file_upload"))
  .post(async (req, res) => {
    try {
      const { title, description } = req.body;

      await Picture.create({ title, description });

      res.status(201).json({ message: "Foto subida correctamente." });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  });
