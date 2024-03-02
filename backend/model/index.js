const seedAdmin = require("../adminSeeder.js");
const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

// la sequelize yo config haru lag ani database connect gardey vaneko hae 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  port : 3306, 
  // port : 7013,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});



const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// importing model files 

db.users = require("./userModel.js")(sequelize, DataTypes);
db.courses = require("./courseModel.js")(sequelize, DataTypes);
db.chapters = require("./courseChaptersModel.js")(sequelize, DataTypes);
db.categories = require("./courseCategoryModel.js")(sequelize, DataTypes);
sequelize
  .authenticate()
  .then(async () => {
    console.log("CONNECTED!!");
    seedAdmin(db.users)
   // check if admin exists or not
  })
  .catch((err) => {
    console.log("Error" + err);
  });


// relationships 
db.courses.hasMany(db.chapters)
db.chapters.belongsTo(db.courses)

db.chapters.hasMany(db.categories)
db.categories.belongsTo(db.chapters)


db.sequelize.sync({ force: 0 }).then(() => {
  console.log("yes re-sync done");
});

module.exports = db;