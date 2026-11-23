const PASS_MARK = 80;
const SESSION_HOURS = 2;

const canAccess = (user, mod) => mod.track === "free" || user.tier === "paid";

module.exports = { PASS_MARK, SESSION_HOURS, canAccess };
