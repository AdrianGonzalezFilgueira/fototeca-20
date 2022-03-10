import { Types } from "mongoose";
import dbConnect from "../../../lib/dbConnect";
import Picture from "../../../models/picture";
import handler from "../../../lib/handler";

export default handler
  .get(async (req, res) => {
    try {
      await dbConnect();
      const { id } = req.query;

      if (!Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "La ID es incorrecta." });
        return;
      }
      const picture = await Picture.findById({ _id: id });

      if (!picture) {
        res.status(404).json({ message: "Foto no encontrada." });
        return;
      }

      const { title, description, image } = picture;

      res.status(200).json({ title, description, image });
    } catch (error) {
      res.status(400).json({ error });
    }
  })
  .delete(async (req, res) => {
    try {
      await dbConnect();
      const { id } = req.query;

      if (!Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "La ID es incorrecta." });
        return;
      }
      const picture = await Picture.deleteOne({ _id: id });

      if (picture.deletedCount === 0) {
        res.status(404).json({ message: "Foto no encontrada." });
        return;
      }

      res.status(200).json({ message: "Foto borrada correctamente." });
    } catch (error) {
      res.status(400).json({ error });
    }
  });
