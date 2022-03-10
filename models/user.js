import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  googleId: { type: String, default: null },
  // loginAt: Date
});

export default models.User || model("User", userSchema);
