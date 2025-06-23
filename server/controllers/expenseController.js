const Expense = require("../models/Expense.js");

// 📥 Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const { amount, category, description, date } = req.body;

    const expense = new Expense({
      user: req.user.id, // comes from auth middleware
      amount,
      category,
      description,
      date,
    });

    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    console.error("Create Expense Error:", error);
    res.status(500).json({ message: "Failed to create expense." });
  }
};

// 📤 Get all expenses for the logged-in user
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.status(200).json(expenses);
  } catch (error) {
    console.error("Get Expenses Error:", error);
    res.status(500).json({ message: "Failed to fetch expenses." });
  }
};

// 📁 Get a single expense by ID
exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!expense) {
      return res.status(404).json({ message: "Expense not found." });
    }

    res.status(200).json(expense);
  } catch (error) {
    console.error("Get Expense By ID Error:", error);
    res.status(500).json({ message: "Failed to fetch expense." });
  }
};

// 📝 Update an expense
exports.updateExpense = async (req, res) => {
  try {
    const { amount, category, description, date } = req.body;

    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { amount, category, description, date },
      { new: true }
    );

    if (!expense) {
      return res
        .status(404)
        .json({ message: "Expense not found or not authorized." });
    }

    res.status(200).json(expense);
  } catch (error) {
    console.error("Update Expense Error:", error);
    res.status(500).json({ message: "Failed to update expense." });
  }
};

// 🗑 Delete an expense
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!expense) {
      return res
        .status(404)
        .json({ message: "Expense not found or not authorized." });
    }

    res.status(200).json({ message: "Expense deleted successfully." });
  } catch (error) {
    console.error("Delete Expense Error:", error);
    res.status(500).json({ message: "Failed to delete expense." });
  }
};
