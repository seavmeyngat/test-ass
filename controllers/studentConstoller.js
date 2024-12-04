import studentModel from "../models/studentModel.js";

export const createStudent = async (req, res) => {
    const { idcard, name, email, phone, classId, createAt, updateAt} = req.body;
    try {
      const newStudent = new studentModel({
        idcard, name, email, phone, classId, createAt, updateAt,
        new: true
      });
      await newStudent.save();
      return res.status(201).json({ newStudent });
    } catch (error) {
      console.log(error.message);
    }
};

export const getAllStudentby = async (req,res) => {
    try {
        const students = await studentModel.find();
        console.log("All Student:", students);
       return res.status(200).json({students});
    } catch (err) {
        console.error("Error reading students:", err);
    }
};


export const getstudentbyId = async (req,res) => {
    try {
        const students = await studentModel.findById(req.params.id);
        console.log("All Student:", students);
       return res.status(200).json({students});
    } catch (err) {
        console.error("Error reading students:", err);
    }
};


export const updatestudentId = async (req,res) => {
    try {
        const students = await studentModel.findById(req.params.id,req.body,{new:true});
        console.log("All Student:", students);
       return res.status(200).json({students});
    } catch (err) {
        console.error("Error reading students:", err);
    }
};

export const deletestudentbyId= async (req,res) => {
    try {
        const students = await studentModel.findByIdAndDelete(req.params.id,req.body,{new:true});
        console.log("All Student:", students);
       return res.status(200).json({students});
    } catch (err) {
        console.error("Error reading students:", err);
    }
};

