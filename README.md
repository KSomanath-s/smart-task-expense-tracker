# 📝 Smart Task & Expense Tracker

A modern, clean, and interactive React application to manage your daily tasks while keeping a strict eye on your budget and expenses. This app is built with **React**, styled with **Tailwind CSS**, and features sleek, non-blocking toast notifications.

---

## ✨ Features

- **Double-Duty Tracking:** Manage tasks and monitor real-time expenses simultaneously.
- **Smart Update Protection:** Prevents form-hanging issues if a task is deleted while in active "Edit" mode.
- **Strict Duplicate Prevention:** Instantly blocks repeated tasks (case-insensitive) using customized checking logic:
  - `item.name.toLowerCase() === taskInput.trim().toLowerCase()`
- **No Self-Blocking on Edit:** Allows you to edit and update a task's price without triggering a duplicate error on its own name.
- **Sleek Toast Notifications:** Powered by `react-toastify` for success, info, and error alerts instead of boring browser alerts.
- **Fuzzy Search:** Filter through your tasks instantly as you type.
- **Dynamic Stats:** Live display of **Total Spend** and **Total Tasks Count**.

---

## 🛠️ Tech Stack

- **Frontend Library:** React.js (Hooks: `useState`, Functional Components)
- **Styling:** Tailwind CSS (Responsive Design, Custom Borders, and Shadows)
- **Notifications:** React-Toastify
- **Icons:** Emojis & Search Integration

---

## 🚀 Getting Started

Follow these simple steps to set up and run this project locally on your system.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/your-username/smart-task-expense-tracker.git](https://github.com/your-username/smart-task-expense-tracker.git)
   cd smart-task-expense-tracker