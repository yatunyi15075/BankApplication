import { DataTypes } from 'sequelize';
import config from '../config.js'; 

const { sequelize } = config; 

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
