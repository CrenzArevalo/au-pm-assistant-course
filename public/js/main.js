import { api } from "./api.js";
import { state } from "./state.js";
import { initShell, renderAuthBar, renderNav, setLoggedIn } from "./shell.js";
import { actions, showLogin, renderDashboard, renderModule } from "./views.js";

function route() {
  if (!state.user) return showLogin();
  renderNav(state.modules);
  const match = location.hash.match(/^#\/module\/([A-Za-z0-9_-]{1,40})$/);
  if (match) return renderModule(match[1]);
  return renderDashboard();
}

async function start() {
  setLoggedIn();
  state.modules = await api("/course/modules");
  renderAuthBar(logout);
  route();
}

async function logout() {
  await api("/logout", { method: "POST" }).catch(() => {});
  state.user = null;
  state.modules = [];
  showLogin("You have been logged out.");
}

actions.start = start;

initShell();

window.addEventListener("hashchange", () => {
  if (state.user) route();
});

window.addEventListener("session-expired", () => {
  if (state.user) showLogin("Your session has expired. Please log in again.");
});

(async () => {
  try {
    state.user = await api("/me");
    await start();
  } catch {
    showLogin();
  }
})();
