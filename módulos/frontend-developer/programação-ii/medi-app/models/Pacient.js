import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Pacient name is required"],
  },
  birthDate: {
    type: Date,
    required: [true, "Birth date is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Pacient", pacientSchema);
