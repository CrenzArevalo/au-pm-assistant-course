const express = require("express");
const modules = require("../content/modules");
const store = require("../store");
const { requireAuth } = require("../middleware/auth");
const { canAccess, PASS_MARK } = require("../access");

const router = express.Router();
router.use(requireAuth);

function loadModule(req, res) {
  const mod = modules.find((m) => m.id === req.params.id);
  if (!mod) {
    res.status(404).json({ error: "Module not found." });
    return null;
  }
  if (!canAccess(req.user, mod)) {
    res.status(403).json({ error: "This module is part of the Paid Training." });
    return null;
  }
  return mod;
}

router.get("/modules", (req, res) => {
  const progress = store.getProgress(req.user.id);
  res.json(
    modules.map((m) => ({
      id: m.id,
      title: m.title,
      track: m.track,
      duration: m.duration,
      locked: !canAccess(req.user, m),
      passed: Boolean(progress[m.id]?.passed),
    }))
  );
});

router.get("/modules/:id", (req, res) => {
  const mod = loadModule(req, res);
  if (!mod) return;
  const { quiz, ...content } = mod;
  res.json({
    ...content,
    quiz: quiz.map(({ id, question, options }) => ({ id, question, options })),
  });
});

router.post("/modules/:id/quiz", (req, res) => {
  const mod = loadModule(req, res);
  if (!mod) return;

  const answers = Array.isArray(req.body.answers) ? req.body.answers : [];
  const results = mod.quiz.map((q, i) => ({
    id: q.id,
    correct: answers[i] === q.answer,
    explanation: q.explanation,
  }));

  const score = Math.round((100 * results.filter((r) => r.correct).length) / mod.quiz.length);
  const passed = score >= PASS_MARK;

  const previous = store.getProgress(req.user.id)[mod.id] || {};
  store.saveProgress(req.user.id, mod.id, {
    score: Math.max(score, previous.score || 0),
    passed: passed || Boolean(previous.passed),
    updatedAt: new Date().toISOString(),
  });

  res.json({ score, passed, results });
});

router.get("/certificate", (req, res) => {
  if (req.user.tier !== "paid") {
    return res.status(403).json({ error: "Certificates are for the Paid Training track." });
  }
  const progress = store.getProgress(req.user.id);
  const incomplete = modules.filter((m) => !progress[m.id]?.passed).map((m) => m.id);
  if (incomplete.length) {
    return res.status(403).json({
      error: `Not yet eligible. Pass every module with ${PASS_MARK}% or higher.`,
      incomplete,
    });
  }
  res.json({
    name: req.user.name,
    issuedOn: new Date().toISOString().slice(0, 10),
    course: "Australian Property Manager Assistant Training",
  });
});

module.exports = router;
