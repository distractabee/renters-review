const sequelize = require('../config/connection');
const Font = require('../models/font');
const fontData = require('./font-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Font.bulkCreate(fontData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
