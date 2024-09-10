// controllers/reportController.js
import LoanReport from '../models/loanReportModel.js';
import Loan from '../models/loanModel.js'; // Assuming a Loan model exists


export const createReportData = async (req, res) => {
  try {
    const { totalLoans, totalFunds, totalRepayments, activeLoans, overdueLoans } = req.body;

    const report = await LoanReport.create({
      totalLoans,
      totalFunds,
      totalRepayments,
      activeLoans,
      overdueLoans,
    });

    res.status(201).json({ message: 'Report created successfully!', report });
  } catch (error) {
    console.error('Error creating report:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



// Get report data
export const getReportData = async (req, res) => {
  try {
    const totalLoans = await Loan.count();
    const totalFunds = await Loan.sum('amount');
    const totalRepayments = await Loan.sum('repaymentAmount'); // Assuming a 'repaymentAmount' field
    const activeLoans = await Loan.count({ where: { status: 'active' } });
    const overdueLoans = await Loan.count({ where: { status: 'overdue' } });

    const reportData = {
      totalLoans,
      totalFunds,
      totalRepayments,
      activeLoans,
      overdueLoans,
    };

    res.json(reportData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching report data' });
  }
};


