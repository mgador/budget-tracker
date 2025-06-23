# 💸 Budget Tracker

A modern web application to help users track income, categorize expenses, and stay within their monthly budget. Built with a full-stack setup to showcase real-world development skills.

---

## 📌 Features

- 🔐 **User Authentication** (JWT-based)
- 💰 **Add monthly income and expenses**
- 📊 **Visual breakdown of spending by category**
- 📅 **Filter expenses by month or category**
- 💾 **Persistent storage** with PostgreSQL / MongoDB
- 📱 **Responsive and mobile-first UI**

---

## 🛠 Tech Stack

| Layer      | Tech                                                      |
| ---------- | --------------------------------------------------------- |
| Frontend   | React, Tailwind CSS                                       |
| Backend    | Node.js, Express                                          |
| Database   | PostgreSQL / MongoDB                                      |
| Auth       | JWT, bcrypt                                               |
| Charts     | Recharts, Chart.js                                        |
| Deployment | Vercel (frontend), Render (backend), Supabase/NeonDB (DB) |

---

## 📂 Project Structure

```bash
budget-tracker/
├── client/               # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── hooks/
├── server/               # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
```

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/budget-tracker.git
   cd budget-tracker
   ```
2. **Install dependencies:**
   - Backend:
     ```sh
     cd server && npm install
     ```
   - Frontend:
     ```sh
     cd ../client && npm install
     ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env` in both `server` and `client` (if needed) and fill in the required values.
4. **Run the app:**
   - Backend:
     ```sh
     npm run dev
     ```
   - Frontend:
     ```sh
     npm start
     ```

---

## 📖 License

This project is licensed under the MIT License.
