const MONGO_URL = process.env.MONGO_URL;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_URI = `${MONGO_URL}/${MONGO_DB}`;

const SECRET = process.env.SECRET;

const routes = {
  private: "/private",
  users: "/users",
  login: "/login"
};

const config = {
  MONGO_URI,
  routes,
  SECRET
};
console.log("config", config);

module.exports = config;
