require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET || "";

if (jwtSecret.length < 32) {
  console.error("JWT_SECRET is missing or too short. Copy .env.example to .env and set it.");
  process.exit(1);
}

module.exports = {
  port: Number(process.env.PORT) || 3000,
  jwtSecret,
  isProd: process.env.NODE_ENV === "production",
};
