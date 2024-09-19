import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Create a Sequelize instance using MySQL
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql', // Change dialect to 'mysql'
    logging: console.log, // Enable logging (optional)
  }
);


// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   logging: console.log, // Enable logging
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false, // Adjust based on your SSL configuration
//     },
//   },
// });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the MySQL database.');
  })
  .catch((error) => {
    console.error('Error connecting to the MySQL database:', error.message);
  });

const jwtSecret = process.env.JWT_SECRET;

const config = {
  sequelize,
  jwtSecret,
  port: process.env.PORT || 5000,
};

export default config;
