# Story Flight

Story Flight is a scroll-driven 3D portfolio built with React, Vite, and React Three Fiber.  
It turns a flight path into a personal story, with the plane moving through key milestones in my journey from India to Canada and across my work experience.

## Overview

As the user scrolls, the site moves through these chapters:

- `2021` - Finished high school in India and came to Canada to begin a new chapter in computer science.
- `2023-2025` - IT Helpdesk at Acadia University, supporting students and staff with devices, software, and day-to-day technical issues.
- `2024` - Data Analyst Co-op at Acadia University, improving reporting, redesigning ETL workflows, and automating recurring data tasks.
- `2024-2025` - Teaching Assistant at Acadia University, helping students with OOP, APIs, debugging, and clean code practices.
- `2024-2025` - President at Acadia Students' Union, leading strategy and operations for an organization serving 4,000+ students.
- `2025-2026` - Enrollment Coordinator at Oxford International, improving CRM accuracy and building analytics for stronger forecasting.

The experience is designed so the plane stops naturally at each story point while still feeling smooth during scrolling.

## Tech Stack

- React
- Vite
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- GSAP
- Lamina

## Getting Started

Install dependencies:

```bash
npm install
Run the development server:

npm run dev
Build for production:

npm run build
Preview the production build locally:

npm run preview
Project Structure
src/components/Experience.jsx - scroll story content, plane motion, and camera path logic
src/components/Overlay.jsx - intro and outro overlay text
src/components/TextSection.jsx - layout and styling for each story section
src/App.jsx - scene setup and overall scroll length
Customization
You can easily personalize this project further by:

updating the story sections in Experience.jsx
changing the intro and ending copy in Overlay.jsx
adjusting text sizing and spacing in TextSection.jsx
swapping the airplane model or environment for a different visual theme
Why I Built This
I wanted a portfolio that felt more personal than a standard website.
Instead of listing experience in a static layout, Story Flight presents my journey as an interactive ride through the milestones that shaped my academic and professional growth.



### 3D Model credits

Airplane by Poly by Google [CC-BY](https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/8VysVKMXN2J)
