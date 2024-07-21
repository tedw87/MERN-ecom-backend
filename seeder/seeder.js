const connectDB = require('../config/db');

connectDB();

const categoryData = require('./categories');
const Category = require('../models/CategoryModel');

const importData = async () => {
  try {
    await Category.deleteMany({});
    await Category.insertMany(categoryData);
    console.log('Data Import Success');
    process.exit();
  } catch (error) {
    console.error('Error with data import', error);
    process.exit(1);
  }
};

importData();
