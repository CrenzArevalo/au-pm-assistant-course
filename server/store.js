const fs = require("fs");
const path = require("path");
const { supabaseUrl, supabaseServiceKey } = require("./config");

const DATA_DIR = path.join(__dirname, "..", "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const PROGRESS_FILE = path.join(DATA_DIR, "progress.json");
const useSupabase = Boolean(supabaseUrl && supabaseServiceKey);

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

async function sbFetch(endpoint, { method = "GET", body, prefer } = {}) {
  const headers = {
    apikey: supabaseServiceKey,
    Authorization: `Bearer ${supabaseServiceKey}`,
    "Content-Type": "application/json",
  };
  if (prefer) headers.Prefer = prefer;

  const res = await fetch(`${supabaseUrl}/rest/v1/${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase error (${res.status}): ${text}`);
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

function mapUser(row) {
  if (!row) return null;
  return {
    id: row.id,
    email: row.email,
    name: row.name,
    tier: row.tier,
    passwordHash: row.password_hash ?? row.passwordHash,
  };
}

async function findUserByEmail(email) {
  if (!useSupabase) {
    return readJSON(USERS_FILE, []).find((u) => u.email === email) || null;
  }
  const rows = await sbFetch(
    `users?email=eq.${encodeURIComponent(email)}&select=*&limit=1`
  );
  return mapUser(rows?.[0]);
}

async function findUserById(id) {
  if (!useSupabase) {
    return readJSON(USERS_FILE, []).find((u) => u.id === id) || null;
  }
  const rows = await sbFetch(
    `users?id=eq.${encodeURIComponent(id)}&select=*&limit=1`
  );
  return mapUser(rows?.[0]);
}

async function getProgress(userId) {
  if (!useSupabase) {
    return readJSON(PROGRESS_FILE, {})[userId] || {};
  }
  const rows = await sbFetch(
    `progress?user_id=eq.${encodeURIComponent(userId)}&select=module_id,score,passed,updated_at`
  );
  const out = {};
  for (const r of rows || []) {
    out[r.module_id] = {
      score: r.score,
      passed: Boolean(r.passed),
      updatedAt: r.updated_at,
    };
  }
  return out;
}

async function saveProgress(userId, moduleId, result) {
  if (!useSupabase) {
    const all = readJSON(PROGRESS_FILE, {});
    all[userId] = { ...(all[userId] || {}), [moduleId]: result };
    writeJSON(PROGRESS_FILE, all);
    return;
  }
  await sbFetch("progress?on_conflict=user_id,module_id", {
    method: "POST",
    prefer: "resolution=merge-duplicates",
    body: {
      user_id: userId,
      module_id: moduleId,
      score: result.score,
      passed: result.passed,
      updated_at: result.updatedAt,
    },
  });
}

module.exports = {
  findUserByEmail,
  findUserById,
  getProgress,
  saveProgress,
};
