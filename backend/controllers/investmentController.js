
// Invest in a loan
export const investInLoan = async (req, res) => {
    try {
        const { amount, loanId } = req.body;
        const lenderId = req.user.id; // Assume the lender ID is available from authenticated user

        const loan = await Loan.findByPk(loanId);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }

        const investment = await Investment.create({ amount, lenderId, loanId });

        // Optionally: Update loan status to 'Funded' if needed
        // await loan.update({ status: 'Funded' });

        res.status(201).json({ message: 'Investment successful', investment });
    } catch (error) {
        res.status(500).json({ message: 'Error investing in loan', error });
    }
};

// Get all investments for a lender
export const getLenderInvestments = async (req, res) => {
    try {
        const lenderId = req.user.id;
        const investments = await Investment.findAll({
            where: { lenderId },
            include: [{ model: Loan, attributes: ['amount', 'interestRate', 'term'] }], // Include loan details
        });
        res.status(200).json(investments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching investments', error });
    }
};