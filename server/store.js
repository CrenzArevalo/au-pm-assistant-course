const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const PROGRESS_FILE = path.join(DATA_DIR, "progress.json");

function readJSON(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  const raw = fs.readFileSync(file, "utf8");
  return raw.trim() ? JSON.parse(raw) : fallback;
}

function writeJSON(file, data) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2));
  fs.renameSync(tmp, file);
}

const getAllUsers = () => readJSON(USERS_FILE, []);

module.exports = {
  getAllUsers,
  saveUsers: (users) => writeJSON(USERS_FILE, users),
  findUserByEmail: (email) => getAllUsers().find((u) => u.email === email) || null,
  findUserById: (id) => getAllUsers().find((u) => u.id === id) || null,
  getProgress: (userId) => readJSON(PROGRESS_FILE, {})[userId] || {},
  saveProgress(userId, moduleId, result) {
    const all = readJSON(PROGRESS_FILE, {});
    all[userId] = { ...(all[userId] || {}), [moduleId]: result };
    writeJSON(PROGRESS_FILE, all);
  },
};
