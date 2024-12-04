import mongoose from "mongoose";
const studentSchema = new mongoose.Schema(
  {
    idcard: { require: true, type: String },
    name: { require: true, type: String },
    email: { require: true, type: String },
    phone: { require: true, type: String },
    classId: {type:mongoose.Schema.Types.ObjectId,ref:'Class'}
  },
  { timestamps: true }
);

export default mongoose.model("student", studentSchema);
