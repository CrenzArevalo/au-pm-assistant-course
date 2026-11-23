import { el, setMain } from "./dom.js";
import { api } from "./api.js";
import { state } from "./state.js";
import { renderNav, setLoggedOut } from "./shell.js";

export const actions = { start: null };

const panel = (title, ...children) => el("section", { class: "panel" }, [el("h3", {}, title), ...children]);

const numbered = (items) => el("ol", {}, items.map((item) => el("li", {}, item)));

export function showLogin(message = "") {
  state.user = null;
  setLoggedOut();

  const email = el("input", {
    type: "email",
    id: "email",
    name: "email",
    required: true,
    autocomplete: "username",
    inputmode: "email",
    autocapitalize: "none",
    spellcheck: "false",
  });
  const password = el("input", {
    type: "password",
    id: "password",
    name: "password",
    required: true,
    autocomplete: "current-password",
  });
  const notice = el("p", { class: "notice", role: "status" }, message);
  const error = el("p", { class: "error", role: "alert" });
  const submit = el("button", { class: "btn primary block", type: "submit" }, "Log in");

  const form = el("form", { class: "card login" }, [
    el("h2", {}, "Log in to your training"),
    el("label", { class: "field" }, [el("span", {}, "Email"), email]),
    el("label", { class: "field" }, [el("span", {}, "Password"), password]),
    submit,
    notice,
    error,
  ]);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submit.disabled = true;
    error.textContent = "";
    notice.textContent = "";
    try {
      state.user = await api("/login", {
        method: "POST",
        body: { email: email.value.trim(), password: password.value },
      });
      password.value = "";
      await actions.start();
    } catch (err) {
      state.user = null;
      password.value = "";
      error.textContent = err.message;
      password.focus();
    } finally {
      submit.disabled = false;
    }
  });

  setMain(el("div", { class: "login-wrap" }, form));
}

export function renderDashboard() {
  const out = el("p", { class: "cert-output", role: "status" });
  const certButton = el(
    "button",
    { class: "btn", type: "button", onclick: () => checkCertificate(out) },
    "Check certificate eligibility"
  );

  const cards = state.modules.map((m) =>
    el("a", { class: `module-card ${m.track}${m.locked ? " is-locked" : ""}`, href: `#/module/${m.id}` }, [
      el("span", { class: `tag ${m.track}` }, m.track === "free" ? "Free" : "Paid"),
      el("h3", {}, m.title),
      el("p", { class: "meta" }, m.duration),
      el("p", { class: "status" }, m.locked ? "Paid Training" : m.passed ? "Passed" : "Not started"),
    ])
  );

  const upgrade =
    state.user.tier === "free"
      ? el("aside", { class: "card card-note" }, [
          el("h2", {}, "Ready for the full course?"),
          el(
            "p",
            {},
            "Paid Training: ₱499 for 7 days of live 1-hour sessions, practical workflows, software tutorials, certification and job support."
          ),
          el("p", {}, "Contact your trainer to upgrade."),
        ])
      : null;

  setMain(
    el("h2", {}, `Welcome, ${state.user.name}`),
    el("div", { class: "grid" }, cards),
    upgrade,
    el("section", { class: "card" }, [
      el("h2", {}, "Certificate"),
      el("p", {}, `Paid learners who pass every module at 80% or higher can request their certificate.`),
      certButton,
      out,
    ])
  );
}

async function checkCertificate(out) {
  out.textContent = "Checking…";
  try {
    const cert = await api("/course/certificate");
    out.textContent = `Certificate issued to ${cert.name} on ${cert.issuedOn}: ${cert.course}.`;
  } catch (err) {
    out.textContent = err.message;
  }
}

export async function renderModule(id) {
  setMain(el("p", { class: "muted" }, "Loading module…"));

  let mod;
  try {
    mod = await api(`/course/modules/${encodeURIComponent(id)}`);
  } catch (err) {
    return setMain(
      el("section", { class: "card card-locked" }, [
        el("h2", {}, "Module unavailable"),
        el("p", {}, err.message),
        el("a", { class: "btn", href: "#/" }, "Back to dashboard"),
      ])
    );
  }

  setMain(
    el("a", { class: "back-link", href: "#/" }, "← Back to dashboard"),
    el("header", { class: "module-head" }, [
      el("span", { class: `tag ${mod.track}` }, mod.track === "free" ? "Free" : "Paid"),
      el("h2", {}, mod.title),
      el("p", { class: "meta" }, mod.duration),
    ]),
    el("section", { class: "card" }, [
      el("h3", {}, "Learning objectives"),
      el("ul", {}, mod.objectives.map((o) => el("li", {}, o))),
    ]),
    ...mod.lessons.map(renderLesson),
    el("section", { class: "card" }, [
      el("h3", {}, "Key terms"),
      el(
        "dl",
        { class: "terms" },
        mod.keyTerms.map(([term, def]) => el("div", {}, [el("dt", {}, term), el("dd", {}, def)]))
      ),
    ]),
    panel(`Activity: ${mod.activity.title}`, numbered(mod.activity.steps)),
    panel(`Case study: ${mod.caseStudy.title}`, el("p", {}, mod.caseStudy.scenario), numbered(mod.caseStudy.questions)),
    el("section", { class: "card" }, [
      el("h3", {}, "Knowledge check"),
      el("p", { class: "meta" }, "Score 80% or higher to pass."),
      renderQuiz(mod),
    ])
  );
}

function renderLesson(lesson) {
  return el("section", { class: "card" }, [
    el("h3", {}, lesson.title),
    ...lesson.paragraphs.map((p) => el("p", {}, p)),
    lesson.table ? renderTable(lesson.table) : null,
    lesson.diagram ? el("pre", { class: "diagram", tabindex: "0" }, lesson.diagram) : null,
  ]);
}

function renderTable({ headers, rows }) {
  return el("div", { class: "table-wrap", tabindex: "0", role: "region", "aria-label": "Table, scroll sideways if needed" }, [
    el("table", {}, [
      el("thead", {}, el("tr", {}, headers.map((h) => el("th", { scope: "col" }, h)))),
      el("tbody", {}, rows.map((r) => el("tr", {}, r.map((c) => el("td", {}, c))))),
    ]),
  ]);
}

function renderQuiz(mod) {
  const result = el("div", { class: "result", role: "status", hidden: true });
  const submit = el("button", { class: "btn primary", type: "submit" }, "Submit answers");

  const form = el("form", { class: "quiz" }, [
    ...mod.quiz.map((q) =>
      el("fieldset", {}, [
        el("legend", {}, q.question),
        ...q.options.map((opt, j) =>
          el("label", { class: "option" }, [
            el("input", { type: "radio", name: q.id, value: String(j), required: j === 0 }),
            el("span", {}, opt),
          ])
        ),
      ])
    ),
    submit,
    result,
  ]);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const answers = mod.quiz.map((q) => {
      const checked = form.querySelector(`input[name="${q.id}"]:checked`);
      return checked ? Number(checked.value) : -1;
    });

    submit.disabled = true;
    try {
      const data = await api(`/course/modules/${encodeURIComponent(mod.id)}/quiz`, {
        method: "POST",
        body: { answers },
      });
      showResult(result, data);
      state.modules = await api("/course/modules");
      renderNav(state.modules);
    } catch (err) {
      showError(result, err.message);
    } finally {
      submit.disabled = false;
    }
  });

  return form;
}

function showResult(box, data) {
  box.hidden = false;
  box.classList.toggle("fail", !data.passed);
  box.replaceChildren(
    el("p", {}, [
      el("strong", {}, `Score: ${data.score}%. `),
      data.passed ? "Passed." : "Not yet. Review the lessons and try again.",
    ]),
    el(
      "ol",
      {},
      data.results.map((r) => el("li", {}, `${r.correct ? "Correct." : "Incorrect."} ${r.explanation}`))
    )
  );
}

function showError(box, message) {
  box.hidden = false;
  box.classList.add("fail");
  box.replaceChildren(el("p", {}, message));
}
