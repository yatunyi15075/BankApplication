import Repayment from '../models/borrowerRepaymentModel.js';
import Loan from '../models/loanModel.js';
import User from '../models/userModel.js';

// Create a new repayment
export const createRepayment = async (req, res) => {
  try {
    const { amount, date, loanId } = req.body;
    const borrowerId = req.user.id;

    // Check if the loan exists
    const loan = await Loan.findByPk(loanId);
    if (!loan) {
      return res.status(404).json({ error: 'Loan not found' });
    }

    // Check if the borrower exists
    const borrower = await User.findByPk(borrowerId);
    if (!borrower) {
      return res.status(404).json({ error: 'Borrower not found' });
    }

    // Create repayment
    const repayment = await Repayment.create({ amount, date, loanId, borrowerId });
    return res.status(201).json(repayment);
  } catch (error) {
    console.error('Error creating repayment:', error.stack); // Log full error
    return res.status(500).json({ message: 'Failed to create loan request', error: error.message });
  }
};

// Get repayment history for a borrower
// export const getRepaymentHistory = async (req, res) => {
//   try {
//     const { borrowerId } = req.params;
//     const repayments = await Repayment.findAll({
//       where: { borrowerId },
//       include: [{ model: Loan }],
//     });
//     res.status(200).json(repayments);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


export const getRepaymentHistory = async (req, res) => {
  try {
    const { borrowerId } = req.params;

    // Fetch repayments along with the associated loan information
    const repayments = await Repayment.findAll({
      where: { borrowerId },
      include: [{ 
        model: Loan,
        attributes: ['id', 'amount', 'interestRate', 'dueDate'] // Customize attributes as needed
      }],
    });

    res.status(200).json(repayments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

