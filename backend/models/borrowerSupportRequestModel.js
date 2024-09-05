import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SupportRequest = sequelize.define('SupportRequest', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Pending',
  },
}, {
  timestamps: true,
});

export default SupportRequest;
