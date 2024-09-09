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
