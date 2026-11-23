const jwt = require("jsonwebtoken");
const store = require("../store");
const { jwtSecret, isProd } = require("../config");
const { SESSION_HOURS } = require("../access");

const COOKIE = "token";

const cookieOptions = {
  httpOnly: true,
  sameSite: "strict",
  secure: isProd,
  path: "/",
  maxAge: SESSION_HOURS * 60 * 60 * 1000,
};

function requireAuth(req, res, next) {
  const token = req.cookies[COOKIE];
  if (!token) return res.status(401).json({ error: "Please log in." });

  let payload;
  try {
    payload = jwt.verify(token, jwtSecret, { algorithms: ["HS256"] });
  } catch {
    return res.status(401).json({ error: "Your session has expired. Please log in again." });
  }

  const user = store.findUserById(payload.sub);
  if (!user) return res.status(401).json({ error: "Please log in." });

  req.user = { id: user.id, name: user.name, tier: user.tier };
  next();
}

module.exports = { requireAuth, COOKIE, cookieOptions };
