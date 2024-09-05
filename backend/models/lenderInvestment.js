import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Investment = sequelize.define('Investment', {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    lenderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    loanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
});

export default Investment;
