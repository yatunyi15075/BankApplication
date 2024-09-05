import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Notification = db.define('Notification', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Assuming you have a Users model
      key: 'id'
    }
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('sent', 'delivered', 'read'),
    defaultValue: 'sent'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

export default Notification;
