const { env } = require("node:process");

module.exports = {
  app: {
    port: env.PORT || 4400,
    debug: env.DEBUG === "active" || false,
  },
  db: {
    mongo: {
      url: env.MONGO_URL,
      options: {
        user: env.MONGO_USER,
        pass: env.MONGO_PASSWORD,
      },
    },
  },
};
