import { el } from "./dom.js";
import { state } from "./state.js";

const $ = (id) => document.getElementById(id);

export function setNavOpen(open) {
  const sidebar = $("sidebar");
  const btn = $("menuBtn");
  sidebar.classList.toggle("open", open);
  $("overlay").hidden = !open;
  btn.setAttribute("aria-expanded", String(open));
  btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.classList.toggle("nav-open", open);

  if (open) {
    sidebar.querySelector("a")?.focus({ preventScroll: true });
  } else if (sidebar.contains(document.activeElement)) {
    btn.focus({ preventScroll: true });
  }
}

export function setLoggedIn() {
  document.body.classList.remove("logged-out");
  $("menuBtn").hidden = false;
}

export function setLoggedOut() {
  setNavOpen(false);
  document.body.classList.add("logged-out");
  $("menuBtn").hidden = true;
  $("authBar").replaceChildren();
  $("nav").replaceChildren();
}

export function renderAuthBar(onLogout) {
  $("authBar").replaceChildren(
    el("span", { class: "auth-name" }, state.user.name),
    el("span", { class: "auth-tier" }, state.user.tier === "paid" ? "Paid" : "Free"),
    el("button", { class: "btn ghost", type: "button", onclick: onLogout }, "Log out")
  );
}

function navLink(href, label, current, locked = false) {
  return el("a", { href, "aria-current": href === current ? "page" : null }, [
    el("span", {}, label),
    locked ? el("span", { class: "pill" }, "Paid") : null,
  ]);
}

export function renderNav(modules) {
  const current = location.hash || "#/";
  $("nav").replaceChildren(
    navLink("#/", "Dashboard", current),
    ...modules.map((m) => navLink(`#/module/${m.id}`, m.title, current, m.locked))
  );
}

export function initShell() {
  $("menuBtn").addEventListener("click", () => {
    setNavOpen(!$("sidebar").classList.contains("open"));
  });
  $("overlay").addEventListener("click", () => setNavOpen(false));
  $("nav").addEventListener("click", (e) => {
    if (e.target.closest("a") && !window.matchMedia("(min-width: 900px)").matches) {
      setNavOpen(false);
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNavOpen(false);
  });
  window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => {
    if (e.matches) setNavOpen(false);
  });
}
