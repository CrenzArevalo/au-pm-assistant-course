const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { isProd } = require("./config");
const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/course");
const { notFound, errorHandler } = require("./middleware/errors");

function createApp() {
  const app = express();

  if (isProd) app.set("trust proxy", 1);
  app.disable("x-powered-by");

  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'"],
          imgSrc: ["'self'", "data:"],
          objectSrc: ["'none'"],
          frameAncestors: ["'none'"],
          formAction: ["'self'"],
          baseUri: ["'self'"],
          upgradeInsecureRequests: isProd ? [] : null,
        },
      },
    })
  );

  app.use(express.json({ limit: "10kb" }));
  app.use(cookieParser());

  app.use("/api", (req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
  });
  app.use("/api", authRoutes);
  app.use("/api/course", courseRoutes);
  app.use("/api", notFound);

  app.use(
    express.static(path.join(__dirname, "..", "public"), {
      index: "index.html",
      dotfiles: "ignore",
    })
  );

  app.use(errorHandler);
  return app;
}

module.exports = { createApp };
