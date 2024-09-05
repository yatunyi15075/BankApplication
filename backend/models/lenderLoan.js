import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Loan = sequelize.define('Loan', {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    term: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    interestRate: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    borrowerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending', // Options: Pending, Approved, Funded
    },
}, {
    timestamps: true,
});

export default Loan;
