import { Schema, model, models } from "mongoose";

const pictureSchema = new Schema({
  title: {
    type: String,
    required: [true, "El campo 'Título' es requerido."],
    minlength: [3, "El campo 'Título' debe contener al menos 3 caracteres."],
    maxlength: [
      50,
      "El campo 'Título' debe contener como máximo 50 caracteres.",
    ],
  },
  description: {
    type: String,
    required: [true, "El campo 'Descripción' es requerido."],
    minlength: [
      3,
      "El campo 'Descripción' debe contener al menos 3 caracteres.",
    ],
    maxlength: [
      150,
      "El campo 'Descripción' debe contener como máximo 150 caracteres.",
    ],
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date,
  },
});

export default models.Picture || model("Picture", pictureSchema);
