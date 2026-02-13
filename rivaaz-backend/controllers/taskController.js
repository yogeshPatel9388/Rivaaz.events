import Task from "../models/Task.js";

/**
 * @desc    Get all tasks for the logged-in user
 * @route   GET /api/tasks
 * @access  Private
 */
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ dueDate: 1 });
    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: error.message });
  }
};

/**
 * @desc    Get task statistics for the Sidebar progress bar
 * @route   GET /api/tasks/stats
 * @access  Private
 */
export const getTaskStats = async (req, res) => {
  try {
    const total = await Task.countDocuments({ user: req.user.id });
    const completed = await Task.countDocuments({
      user: req.user.id,
      isCompleted: true,
    });

    // Avoid division by zero
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    res.status(200).json({
      total,
      completed,
      remaining: total - completed,
      percentage,
    });
  } catch (error) {
    res.status(500).json({ message: "Error calculating stats" });
  }
};

/**
 * @desc    Toggle task completion status
 * @route   PATCH /api/tasks/:id
 * @access  Private
 */
export const toggleTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.isCompleted = !task.isCompleted;
    await task.save();

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};
