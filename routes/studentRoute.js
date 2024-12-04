
import express from "express";
import {
  createStudent,
  getAllStudentby,
  getstudentbyId,
  updatestudentId,
  deletestudentbyId
} from "../controllers/studentConstoller.js";
const router = express.Router();

router.post("/create", createStudent);
router.get("/All", getAllStudentby);
router.get("/:id", getstudentbyId);
router.put("/:id", updatestudentId);
router.delete("/:id", deletestudentbyId);

export default router;