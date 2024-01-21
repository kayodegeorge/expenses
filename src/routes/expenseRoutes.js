const express = require("express");
const expenseController = require("../controllers/expenseController");
const { requireAuth } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", requireAuth, expenseController.getAllExpenses);
router.post("/", requireAuth, expenseController.addExpense);
router.get("/:id", requireAuth, expenseController.getExpenseById);
router.put("/:id", requireAuth, expenseController.updateExpense);
router.delete("/:id", requireAuth, expenseController.deleteExpense);

module.exports = router;
