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
    termsOfService: {
        type: DataTypes.TEXT, // Storing long text for terms of service
        allowNull: true, // Can be nullable if optional
    },
    privacyPolicy: {
        type: DataTypes.TEXT, // Storing long text for privacy policy
        allowNull: true, // Can be nullable if optional
    },
}, {
    timestamps: false,
    tableName: 'settings',
});

export default Setting;



