# 🌿 Carbon Footprint Dashboard

A premium, interactive web application designed to help users track, visualize, and reduce their environmental impact. Built with a focus on modern aesthetics (Glassmorphism, Dark Mode) and smooth user experience.

![Dashboard Preview](https://via.placeholder.com/1200x600?text=Carbon+Footprint+Dashboard+Preview) *<small>(Replace with actual screenshot)</small>*

## ✨ Key Features

- **📊 Interactive Analytics**: Visualize your carbon footprint data with dynamic, responsive charts powered by Recharts.
- **⚡ Real-time Updates**: Instant calculation of environmental impact based on user activity.
- **🌑 Premium Dark Mode**: A sleek, modern UI featuring glassmorphism effects and vibrant accents.
- **🎬 Smooth Animations**: Enhanced user interaction through fluid transitions using Framer Motion.
- **📱 Responsive Design**: Fully optimized for desktop, tablet, and mobile viewing.
- **📜 Activity Log**: Keep track of daily actions and their respective carbon contributions.

## 🚀 Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/) (Vite)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (Custom Hooks & Design System)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 🛠️ Getting Started

Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/carbon-footprint-dashboard.git
   cd carbon-footprint-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to see the dashboard in action!

## 📂 Project Structure

```text
carbon-footprint-dashboard/
├── public/              # Static assets
├── src/
│   ├── components/      # UI Components (EcoChart, StatCard, etc.)
│   ├── assets/          # Project images and icons
│   ├── App.jsx          # Root component & logic
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles & design tokens
│   └── App.css          # Component-specific styles
├── index.html           # HTML template
└── vite.config.js       # Vite configuration
```