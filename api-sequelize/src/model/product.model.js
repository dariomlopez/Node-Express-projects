require("dotenv").config();
const { Sequelize, DataTypes, Model } = require("sequelize");


const sequelize = new Sequelize(
  /**Using dotenv to protect data */
  process.env.DB_NAME,    //database name
  process.env.DB_USER,    //database user
  process.env.DB_PASS,    //database password
  {
    host: process.env.DB_HOST,    //for example localhost
    dialect: "mysql",
  }
);

class Product extends Model {};
/** Defining the datatypes of our products with sequelize models */
Product.init({
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false
  },
  inStock: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize,
  modelName: "Product"
});

module.exports = Product;
// const testConn = async () => {
//   try {
//     await sequelize.authenticate(); // Utilizar await aquí, ya que authenticate es una función asíncrona
//     console.log("Connection has been established successfully.");
//   } catch (err) {
//     console.error("Unable to connect to the database:", err);
//   }
// };

// testConn();