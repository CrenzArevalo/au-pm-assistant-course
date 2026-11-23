const jwt = require("jsonwebtoken");
const store = require("../store");
const { jwtSecret, isProd } = require("../config");
const { SESSION_HOURS } = require("../access");

const COOKIE = "session";
const cookieOptions = {
  httpOnly: true,
  sameSite: "strict",
  secure: isProd,
  path: "/",
  maxAge: SESSION_HOURS * 60 * 60 * 1000,
};

async function requireAuth(req, res, next) {
  try {
    const token = req.cookies?.[COOKIE];
    if (!token) return res.status(401).json({ error: "Please log in." });

    const payload = jwt.verify(token, jwtSecret, { algorithms: ["HS256"] });
    const user = await store.findUserById(payload.sub);
    if (!user) return res.status(401).json({ error: "Session invalid." });

    req.user = user;
    next();
  } catch {
    res.status(401).json({ error: "Session expired. Please log in again." });
  }
}

module.exports = { requireAuth, COOKIE, cookieOptions };
