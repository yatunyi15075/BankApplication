// models/Setting.js
import { DataTypes } from 'sequelize';
import config from '../config.js'; 

const { sequelize } = config; 

const Setting = sequelize.define('Setting', {
    interestRate: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    repaymentTerm: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fees: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'settings',
});

export default Setting;
