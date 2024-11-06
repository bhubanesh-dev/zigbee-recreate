import mongoose, { Schema, Document } from "mongoose";

interface AlumniInfo {
  name: string;
  imgURL: string;
  linkedinURL: string;
  message: string;
}

export interface Alumni extends Document {
  batch: {
    [year: number]: AlumniInfo[];
  };
}

// Updated Alumni schema
const AlumniSchema: Schema<Alumni> = new mongoose.Schema({
  batch: {
    type: Map,
    of: [
      {
        name: {
          type: String,
          required: [true, "Name is required"],
        },
        imgURL: {
          type: String,
          required: [true, "Image URL is required"],
        },
        linkedinURL: {
          type: String,
          required: [true, "LinkedIn URL is required"],
        },
       message: {
            type: String,
          },
      },
    ],
    required: true,
  },
});

const AlumniModel =
  (mongoose.models.Alumni as mongoose.Model<Alumni>) ||
  mongoose.model<Alumni>("Alumni", AlumniSchema);

export default AlumniModel;
