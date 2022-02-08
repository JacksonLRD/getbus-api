/* eslint-disable no-undef */
module.exports = {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [
    process.env.NODE_ENV === "development"
      ? "src/modules/**/*Entity.ts"
      : "dist/modules/**/*Entity.js",
  ],
  migrations: ["src/migration/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
