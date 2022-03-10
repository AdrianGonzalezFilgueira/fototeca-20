import dbConnect from "../../../lib/dbConnect";
import Picture from "../../../models/picture";
import handler from "../../../lib/handler";

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
  .post(async (req, res) => {
    try {
      const { title, description, image } = req.body;

      await Picture.create({ title, description, image });

      res.status(201).json({ message: "Foto subida correctamente." });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  });
