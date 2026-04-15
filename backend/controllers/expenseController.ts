import express, { Request, Response } from 'express';
import Expense from '../models/Expense';

export const addExpense = async (req: any, res: Response) => {
  try {
    const { amount, category, description } = req.body;

    const expense = await Expense.create({
      user: req.user._id,
      amount,
      category,
      description,
    });

    res.status(201).json(expense);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getExpenses = async (req: any, res: Response) => {
  try {
    const expenses = await Expense.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.json(expenses);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteExpense = async (req: any, res: Response) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await expense.deleteOne();

    res.json({ message: 'Expense deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
