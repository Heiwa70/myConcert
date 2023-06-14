module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "12082002",
  DB: "my_concert",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
