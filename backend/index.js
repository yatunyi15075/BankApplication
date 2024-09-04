const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample endpoint to get dashboard data (hardcoded)
app.get('/api/admin/dashboard', (req, res) => {
  res.json({
    totalLoans: 120,
    activeLoans: 85,
    totalUsers: 500,
    newUsers: 25,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
