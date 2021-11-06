//import the Sequelize constructor from the library
const Sequelize = require("sequelize");

require("dotenv").config();

//create connection to our database, pass in your MySQL information for username and password
//Sequelize - database to connected to, env user name, env password, { host infor }
let sequelize;

if (process.env.JAWSDB) {
  Sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PW,
//   {
//     host: "localhost",
//     dialect: "mysql",
//     port: 3306,
//   }
// );

module.exports = sequelize;
