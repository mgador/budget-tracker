# 💸 Budget Tracker

A web application to help users track their income, categorize expenses, and stay within their monthly budget. Built with a modern full-stack setup to showcase real-world development skills.

---

## 📌 Features

- 🔐 User Authentication (JWT-based)
- 💰 Add monthly income and expenses
- 📊 Visual breakdown of spending by category
- 📅 Filter expenses by month or category
- 💾 Persistent storage with PostgreSQL / MongoDB
- 📱 Responsive and mobile-first UI

---

## 🛠 Tech Stack

| Layer       | Tech                     |
|-------------|--------------------------|
| Frontend    | React + Tailwind CSS     |
| Backend     | Node.js + Express        |
| Database    | PostgreSQL / MongoDB     |
| Auth        | JWT + bcrypt             |
| Charts      | Recharts or Chart.js     |
| Deployment  | Vercel (frontend), Render (backend), Supabase/NeonDB (DB) |

---

## 📂 Project Structure

```bash
budget-tracker/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── hooks/
├── server/               # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
