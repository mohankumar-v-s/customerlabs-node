const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data.db'
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const Account = require('./account.model')(sequelize);
const Destination = require('./destination.model')(sequelize);

Account.hasMany(Destination, { foreignKey: 'accountId', onDelete: 'CASCADE' });
Destination.belongsTo(Account, { foreignKey: 'accountId' });

module.exports = { sequelize, Account, Destination };
