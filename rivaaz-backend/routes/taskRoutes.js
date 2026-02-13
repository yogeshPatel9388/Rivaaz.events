import express from "express";
import {
  getTasks,
  getTaskStats,
  toggleTask,
} from "../controllers/taskController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// All task routes require a valid login
router.use(verifyToken);

// GET /api/tasks -> Get Michael & Juliet's to-do list
router.get("/", getTasks);

// GET /api/tasks/stats -> Powers the Sidebar percentage bar
router.get("/stats", getTaskStats);

// PATCH /api/tasks/:id -> Mark a task as done/undone
router.patch("/:id", toggleTask);

export default router;
