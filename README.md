# 📅 Interactive Wall Calendar Component

A highly interactive, visually stunning calendar component built with React and Tailwind CSS. It mimics a physical wall calendar with page-flipping animations, responsive glassmorphic design, and dynamic context-aware note tracking.

## 🚀 Live Demo

[Live Demo](https://datecanvas.netlify.app/)

## ✨ Features

- **Physical Wall Calendar Aesthetic:** Custom geometric `clip-path` shapes and wire-binding graphics simulate a real hanging calendar.
- **Glassmorphism UI:** Frosted glass panels (`backdrop-blur`) layered over dynamic ambient background meshes and high-quality hero imagery.
- **Dynamic Theming:** The entire calendar's color scheme (text highlights, selection backgrounds, holidays) shifts automatically to complement the rotating hero image for each month.
- **Context-Aware Notes System:** Write local notes directly on the calendar! Built-in `localStorage` logic binds your notes dynamically to the active month (e.g., `calendar-notes-2022-01`).
- **Tactile Page Flip Animations:** Switching months triggers realistic CSS 3D rotational animations (`rotateX`) that simulate flipping a hanging page.
- **Holiday Trackers:** Built-in dictionaries automatically render glowing indicator dots and tooltips for major dates (e.g., Valentine's Day, Halloween, Christmas) matching the active theme color.
- **Fully Responsive:** Degrades gracefully from a large desktop full-spread to an intuitive, vertically stacked mobile interface.

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Date Utilities:** `date-fns`

## 💻 Getting Started (Local Setup)

To run this project perfectly on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd Interactive_Calendar_Component
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in the browser:**
   Open the local URL provided in your terminal (typically `http://localhost:5173`).

---
*Built for modern, interactive web design.*
