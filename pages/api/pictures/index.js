import dbConnect from "../../../lib/dbConnect";
import Picture from "../../../models/picture";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const pictures = await Picture.find();
      res.status(200).json({ pictures });
    } catch (error) {
      res.status(400).json({ error });
    }
  } else if (req.method === "POST") {
    try {
      const { title, description, image } = req.body;

      await Picture.create({ title, description, image });

      res.status(201).json({ message: "Foto subida correctamente." });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  }
}
