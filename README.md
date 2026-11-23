# Australian Property Manager Assistant Training

## Setup in VS Code

1. Install Node.js 18 or newer.
2. Open this folder in VS Code and open a terminal (Terminal > New Terminal).
3. Run `npm install`.
4. Copy `.env.example` to `.env`. Replace `JWT_SECRET` with a long random value:
   `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`
5. Add a learner, for example:
   `npm run create-user -- "learner@email.com" "LongPassword123!" "Full Name" paid`
6. Run `npm run dev`, then open http://localhost:3000.

## Where things live

| Path | Purpose | Sent to browser? |
|---|---|---|
| `server/content/modules.js` | All lessons, case studies and answers | No |
| `server/routes/` | Login, course and certificate endpoints | No |
| `server/middleware/auth.js` | Login check on every request | No |
| `.env` | Secret key and settings | No (keep out of Git) |
| `data/` | Learner accounts and progress | No |
| `public/` | Browser files (HTML, CSS, JavaScript) | Yes, all of it |

Never put keys, passwords or answers in `public/`. Anyone can read those files in their browser.
