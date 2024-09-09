import Repayment from '../models/repaymentModel.js';

export const getRepayments = async (req, res) => {
    try {
        const lenderId = req.user.id; // Assuming req.user contains the authenticated user
        const repayments = await Repayment.findAll({
            where: { lenderId },
            order: [['repaymentDate', 'DESC']], // Order by repayment date, most recent first
        });
        res.status(200).json(repayments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch repayments.' });
    }
};
