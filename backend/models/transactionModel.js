// src/models/transactionModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js';


const { sequelize } = config;

const Transaction = sequelize.define('Transaction', {
  reference: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // createdAt and updatedAt
});

export default Transaction;
