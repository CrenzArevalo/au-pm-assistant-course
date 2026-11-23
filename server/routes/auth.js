const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const store = require("../store");
const { jwtSecret, isProd } = require("../config");
const { requireAuth, COOKIE, cookieOptions } = require("../middleware/auth");
const { SESSION_HOURS } = require("../access");

const router = express.Router();
const DUMMY_HASH = bcrypt.hashSync("not-a-real-password", 12);

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many attempts. Please wait 15 minutes and try again." },
});

router.post("/login", loginLimiter, async (req, res, next) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    const user = store.findUserByEmail(email);
    const ok = await bcrypt.compare(password, user ? user.passwordHash : DUMMY_HASH);

    if (!user || !ok) {
      return res.status(401).json({ error: "Email or password is incorrect." });
    }

    const token = jwt.sign({ sub: user.id }, jwtSecret, {
      algorithm: "HS256",
      expiresIn: `${SESSION_HOURS}h`,
    });
    res.cookie(COOKIE, token, cookieOptions);
    res.json({ name: user.name, tier: user.tier });
  } catch (err) {
    next(err);
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie(COOKIE, { httpOnly: true, sameSite: "strict", secure: isProd, path: "/" });
  res.json({ ok: true });
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ name: req.user.name, tier: req.user.tier });
});

module.exports = router;
