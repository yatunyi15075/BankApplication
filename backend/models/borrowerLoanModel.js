import { DataTypes } from 'sequelize';
import config from '../config.js'; 

const { sequelize } = config; 

const Loan = sequelize.define('borrower-Loan', {
  borrowerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  term: {
    type: DataTypes.INTEGER, // Number of months or days
    allowNull: false,
  },
  purpose: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected'),
    defaultValue: 'pending',
  },
  interestRate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  repaymentSchedule: {
    type: DataTypes.JSON, // e.g., { "monthly": true, "start_date": "2024-01-01" }
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default Loan;
