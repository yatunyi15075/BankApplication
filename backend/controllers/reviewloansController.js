import Loan from '../models/reviewloansModel.js';

// Get all loans (for browsing)
export const getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.findAll({ where: { status: 'approved' } });
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
