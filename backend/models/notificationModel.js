import { DataTypes } from 'sequelize';
import config from '../config.js'; 

const { sequelize } = config; 

const Notification = sequelize.define('Notification', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    lenderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING, // e.g., 'loan_status', 'repayment_update', 'announcement'
        allowNull: false,
    },
}, {
    timestamps: true,
});

export default Notification;
