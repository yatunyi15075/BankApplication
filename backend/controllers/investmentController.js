import Investment from '../models/investmentModel.js';
import Loan from '../models/loanModel.js';
// Invest in a loan
export const investInLoan = async (req, res) => {
    try {
      console.log(req.user);  // Check if req.user is being populated
  
      const { amount, loanId } = req.body;
      const lenderId = req.user?.id || req.body.lenderId;  // Fallback to request body
  
      if (!lenderId) {
        return res.status(400).json({ message: 'Lender ID is required' });
      }
  
      const loan = await Loan.findByPk(loanId);
      if (!loan) {
        return res.status(404).json({ message: 'Loan not found' });
      }
  
      const investment = await Investment.create({ amount, lenderId, loanId });
      res.status(201).json({ message: 'Investment successful', investment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error investing in loan', error });
    }
  };
  


  export const getLenderInvestments = async (req, res) => {
    try {
      // Log the req.user to check if it is being populated
      console.log('req.user:', req.user);
  
      // Ensure req.user is defined
      if (!req.user || !req.user.id) {
        return res.status(400).json({ message: 'Lender ID is required' });
      }
  
      const lenderId = req.user.id;
      const investments = await Investment.findAll({
        where: { lenderId },
        include: [{ model: Loan, attributes: ['amount', 'interestRate', 'term'] }],
      });
      res.status(200).json(investments);
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ message: 'Error fetching investments', error });
    } 
  };
  