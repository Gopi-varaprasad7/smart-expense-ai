import express from 'express';
import {
  addExpense,
  getExpenses,
  deleteExpense,
} from '../controllers/expenseController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, addExpense);
router.get('/', protect, getExpenses);
router.delete('/:id', protect, deleteExpense);

export default router;
