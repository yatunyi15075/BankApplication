import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SupportRequest = sequelize.define('SupportRequest', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pending',
    },
}, {
    timestamps: true,
});

export default SupportRequest;
