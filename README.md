# MacBook Pro 3D Landing Page

A premium, interactive Apple-inspired landing page built with React, Three.js, GSAP, and Tailwind CSS. This project showcases advanced frontend techniques including 3D model rendering, complex scroll animations, masonry layouts, and parallax effects.

## ✨ Features

- **Interactive 3D Models**: Uses `@react-three/fiber` and `@react-three/drei` to render high-quality MacBook 14" and 16" GLTF models.
- **Scroll Animations**: Implements `gsap` and `ScrollTrigger` for buttery smooth reveal, zoom, and parallax animations on scroll.
- **Dynamic State Management**: Powered by `zustand` to instantly switch MacBook sizes and colors.
- **Modern Styling**: Styled with Tailwind CSS v4 and vanilla CSS, featuring custom Apple typography and signature gradients.
- **Responsive Layout**: Designed to look stunning on both desktop and mobile devices.

## 🚀 Tech Stack

- **Framework**: React 19 + Vite
- **3D Rendering**: Three.js, React Three Fiber, React Three Drei
- **Animations**: GSAP (GreenSock Animation Platform) + @gsap/react
- **Styling**: Tailwind CSS v4, Vanilla CSS
- **State Management**: Zustand
- **Fonts**: Custom Apple UI fonts (Regular, Medium, SemiBold, Bold)

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

- `/src/components/`: Modular React components for each page section (Hero, Showcase, Features, etc.)
- `/src/constants/`: Centralized data arrays for navigation, features, and footer links.
- `/src/store/`: Zustand state management for 3D viewer interactions.
- `/public/models/`: GLTF format 3D models of MacBook Pro.
- `/public/videos/`: High-quality video assets used in the showcase sections.
- `/public/fonts/`: Custom typography files.

## 🤝 Contact

Developed by **Mohammed**.

Feel free to reach out or open an issue if you have suggestions or feedback!
