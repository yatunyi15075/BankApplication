import { DataTypes } from 'sequelize';
import config from '../config.js'; 

const { sequelize } = config; 

const LenderProfile = sequelize.define('LenderProfile', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, 
        references: {
            model: 'Users', 
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
