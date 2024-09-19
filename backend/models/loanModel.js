//for admin and lender loan

import { DataTypes } from 'sequelize';
import config from '../config.js'; 

const { sequelize } = config; 

const Loan = sequelize.define('Loan', {
  borrowerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  borrowerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  term: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  interestRate: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  purpose: {  // Added field
    type: DataTypes.STRING,
    allowNull: false,
  },
  repaymentSchedule: {  // Added field
    type: DataTypes.STRING,
    allowNull: false,
  },
  riskLevel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  repaymentAmount: {
    type: DataTypes.FLOAT,  // Add this field if it's missing
    allowNull: true,        // Adjust based on whether null values are allowed
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected'),
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
});


export default Loan;
