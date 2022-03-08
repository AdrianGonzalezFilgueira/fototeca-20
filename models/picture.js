import { Schema, model, models } from "mongoose";

const pictureSchema = new Schema({
  title: String,
  description: String,
  image: String,
  // createdAt: Date,
});

export default models.Picture || model("Picture", pictureSchema);
