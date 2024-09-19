import Loan from '../models/borrowerLoanModel.js';

export const createLoan = async (req, res) => {
  const { amount, term, purpose, interestRate, repaymentSchedule } = req.body;
  const borrowerId = req.user.id; 

  try {
    const newLoan = await Loan.create({
      borrowerId,
      amount,
      term,
      purpose,
      interestRate,
      repaymentSchedule,
    });

    res.status(201).json(newLoan);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create loan request' });
  }
};

export const getLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve loans' });
  }
};

export const getLoanById = async (req, res) => {
  const { id } = req.params;

  try {
    const loan = await Loan.findByPk(id);
    if (loan) {
      res.status(200).json(loan);
    } else {
      res.status(404).json({ error: 'Loan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve loan' });
  }
};
