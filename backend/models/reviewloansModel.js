// for lender

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Assume you have configured this

const Loan = sequelize.define('Loan', {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    interestRate: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    term: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    purpose: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending', // pending, approved, funded, repaid
    },
    borrowerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default Loan;
