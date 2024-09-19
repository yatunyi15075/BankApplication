// investmentModel.js
import { DataTypes } from 'sequelize';
import config from '../config.js'; 

const { sequelize } = config; 

const Investment = sequelize.define('Investment', {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    lenderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    loanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: { // Optional: Track investment status
        type: DataTypes.ENUM('pending', 'funded'),
        defaultValue: 'pending',
    },
    repaymentProgress: { // Optional: Track repayment progress
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
}, {
    timestamps: true,
});

export default Investment;
