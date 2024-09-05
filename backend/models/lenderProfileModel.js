import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';  // Assuming you have a database.js file for Sequelize connection

const LenderProfile = sequelize.define('LenderProfile', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'Users',  // Assuming 'Users' is your user model
            key: 'id'
        }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true
});

export default LenderProfile;
