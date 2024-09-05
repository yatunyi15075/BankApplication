import Repayment from '../models/repayment.js';
import Loan from '../models/loan.js';

// Create a new repayment
export const createRepayment = async (req, res) => {
  try {
    const { amount, date, loanId, borrowerId } = req.body;
    const repayment = await Repayment.create({ amount, date, loanId, borrowerId });
    res.status(201).json(repayment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get repayment history for a borrower
export const getRepaymentHistory = async (req, res) => {
  try {
    const { borrowerId } = req.params;
    const repayments = await Repayment.findAll({
      where: { borrowerId },
      include: [{ model: Loan }],
    });
    res.status(200).json(repayments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
