# 💰 Finance Tracker App

A responsive full stack **Finance Tracker** built with **React**, **Firebase**, and **Tailwind CSS**. This app allows users to manage their income and expenses with a clean UI, real-time data sync, and persistent authentication.

---

## 🚀 Features

- 🔐 Firebase Authentication (Signup, Signin)
- 📊 Track Incomes and Expenses
- 📈 Charts for visual representation of finances
- 📝 Add, Edit, and Delete transactions
- 💡 Real-time updates with Firebase Firestore
- 📱 Fully responsive UI with Tailwind CSS
- 🧠 Context API for global state management

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Firebase (Auth + Firestore)
- **State Management:** React Context API
- **Deployment:** Vercel/Netlify (with `_redirects` setup for SPA routing)

---

## 📁 Project Structure

pritam499-finance-tracker/
├── public/ # Static files (e.g., _redirects)
├── src/
│ ├── assets/ # Images and icons
│ ├── auth/ # Firebase auth utilities
│ ├── components/ # Reusable UI components
│ ├── contexts/ # React Contexts (Auth)
│ ├── styles/ # Component-level styles
│ ├── App.jsx # Main app component
│ ├── firebase.js # Firebase configuration
│ └── main.jsx # Entry point
├── tailwind.config.js # Tailwind setup
├── vite.config.js # Vite configuration
└── package.json # Dependencies and scripts


---

## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pritam499/pritam499-finance-tracker.git
cd pritam499-finance-tracker
2. Install dependencies
bash
Copy
Edit
npm install
3. Setup Firebase
Create a project in Firebase Console

Enable Email/Password authentication

Setup Firestore Database

Copy your Firebase config and paste it in src/firebase.js

js
Copy
Edit
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  ...
};
4. Run the app
bash
Copy
Edit
npm run dev
🧾 Scripts
Command	Description
npm run dev	Run the dev server
npm run build	Create production build
npm run preview	Preview production build

📦 Deployment Notes
Add _redirects file in public/ if deploying to Netlify:

bash
Copy
Edit
/* /index.html 200
🙌 Acknowledgements
React

Firebase

Tailwind CSS

Vite

👨‍💻 Author
Pritam Mondal
GitHub | LinkedIn

