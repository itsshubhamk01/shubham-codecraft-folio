# Shubham Kadam – Developer Portfolio

A professional portfolio website showcasing projects, skills, experience, and ways to get in touch.

## Features

- Responsive, accessible UI built with React and Tailwind CSS
- Project showcase with images, descriptions, and tech stacks
- Skills and experience sections
- Contact links and social metadata for better sharing

## Tech Stack

- Vite + React + TypeScript
- shadcn-ui components
- Tailwind CSS

## Project Structure

```text
root/
├─ src/
│  ├─ components/
│  ├─ pages/
│  ├─ lib/
│  └─ main.tsx
├─ index.html
├─ tailwind.config.ts
├─ postcss.config.js
├─ vite.config.ts
└─ package.json
```

## Getting Started

Requirements:
- Node.js 18+ and npm

Install dependencies and start the dev server:

```sh
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint

## Configuration

- Update site metadata in `index.html` (title, description, social image).
- Aliases are configured in `vite.config.ts` (`@` → `src`).

## Deploy

You can deploy the built `dist/` folder to any static host (e.g., Netlify, Vercel, GitHub Pages).

Basic steps:
```sh
npm run build
# upload the dist/ folder to your hosting provider
```

## License

MIT

## Contact

- Name: Shubham Tulashidas Kadam
- Location: Pune, India
- Replace this section with your preferred contact links (email, LinkedIn, GitHub).
