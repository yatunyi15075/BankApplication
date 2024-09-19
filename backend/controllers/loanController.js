import Loan from '../models/loanModel.js';

export const getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll();  // You might want to add more filters or include related models if needed
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const approveLoan = async (req, res) => {
  const { id } = req.params;
  try {
    const loan = await Loan.findByPk(id);
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    loan.status = 'approved';
    await loan.save();
    res.json({ message: 'Loan approved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const rejectLoan = async (req, res) => {
  const { id } = req.params;
  try {
    const loan = await Loan.findByPk(id);
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    loan.status = 'rejected';
    await loan.save();
    res.json({ message: 'Loan rejected successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a loan request (newly added)
export const createLoanRequest = async (req, res) => {
  const { amount, term, purpose, interestRate, repaymentSchedule, borrowerName } = req.body;
  const borrowerId = req.user.id;

  try {
    const newLoan = await Loan.create({
      borrowerId,
      borrowerName,
      amount,
      term,
      purpose,
      interestRate,
      repaymentSchedule,
      riskLevel: calculateRiskLevel(amount, term), // Assuming you have a function to calculate risk level
      status: 'pending',
    });

    res.status(201).json(newLoan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Utility function to calculate risk level (example)
const calculateRiskLevel = (amount, term) => {
  // Simple risk level logic (You can customize this based on your needs)
  if (amount > 50000 && term > 12) {
    return 'High';
  } else if (amount > 10000 && term <= 12) {
    return 'Medium';
  } else {
    return 'Low';
  }
};
