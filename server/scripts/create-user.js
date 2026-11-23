const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const store = require("../store");

const [, , email, password, name, tier = "free"] = process.argv;

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!email || !password || !name) {
  fail('Usage: npm run create-user -- "email" "password (12+ chars)" "Full Name" [free|paid]');
}
if (password.length < 12) fail("Password must be at least 12 characters.");
if (!["free", "paid"].includes(tier)) fail('Tier must be "free" or "paid".');

const normalized = email.trim().toLowerCase();
const users = store.getAllUsers();
if (users.some((u) => u.email === normalized)) fail("A user with that email already exists.");

users.push({
  id: crypto.randomUUID(),
  email: normalized,
  name: name.trim(),
  tier,
  passwordHash: bcrypt.hashSync(password, 12),
  createdAt: new Date().toISOString(),
});
store.saveUsers(users);
console.log(`Created ${tier} learner: ${normalized}`);
