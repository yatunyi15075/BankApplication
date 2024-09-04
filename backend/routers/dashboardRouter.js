import express from 'express';

const router = express.Router();

// Hardcoded Dashboard Data
router.get('/', (req, res) => {
  const dashboardData = {
    totalUsers: 150,
    totalLoans: 75,
    activeLoans: 50,
    totalFundsRaised: 120000,
    overdueLoans: 5,
    newRequests: 10,
  };

  res.json(dashboardData);
});

export default router;
