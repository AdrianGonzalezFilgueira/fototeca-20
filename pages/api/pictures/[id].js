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
        res.status(400).json({ message: "La ID de la imagen es incorrecta." });
        return;
      }
      const data = await Picture.findById({ _id: id });

      if (!data) {
        res.status(404).json({ message: "Imagen no encontrada." });
        return;
      }

      const { title, description, picture } = data;

      res.status(200).json({ title, description, picture });
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
      const data = await Picture.deleteOne({ _id: id });

      if (data.deletedCount === 0) {
        res.status(404).json({ message: "Imagen no encontrada." });
        return;
      }

      res.status(200).json({ message: "Imagen borrada correctamente." });
    } catch (error) {
      res.status(400).json({ error });
    }
  });
