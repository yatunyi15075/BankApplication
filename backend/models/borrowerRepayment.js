import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Repayment = sequelize.define('Repayment', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  loanId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Loans',
      key: 'id',
    },
  },
  borrowerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

export default Repayment;
