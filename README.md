# Dr. Maya Reynolds - Therapy Website

A modern, compassionate, and professional website redesign for Dr. Maya Reynolds, a fictional therapist. This project showcases a clean, responsive design built with Next.js and Tailwind CSS, focusing on user experience and accessible information structure.

## 🚀 Built With

- **[Next.js 15](https://nextjs.org/)** - The React Framework for the Web
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript for better development experience
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icons

## ✨ Features

- **Responsive Design**: Fully responsive layout that adapts seamlessly to mobile, tablet, and desktop screens.
- **Modern UI/UX**: Clean aesthetic with a calming color palette (Sage Green/Sand) suitable for a therapy practice.
- **Navigation**:
  - Sticky header with smooth navigation.
  - Mobile-responsive menu with hamburger toggle and overlay.
- **Key Sections**:
  - **Hero**: Welcoming introduction with clear call-to-action.
  - **About**: Professional profile of Dr. Reynolds.
  - **Services**: clear overview of therapy services provided.
  - **Office**: Virtual tour/images of the practice space.
  - **FAQ**: Common questions answered in an accessible format.
  - **Contact**: Easy access to location and contact information.

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout including Header and Footer
│   └── page.tsx         # Main landing page
├── components/
│   ├── ui/              # Reusable UI components
│   ├── Header.tsx       # Navigation bar
│   ├── Hero.tsx         # Landing section
│   ├── About.tsx        # Profile section
│   ├── Services.tsx     # Services list
│   ├── Office.tsx       # Office gallery/info
│   ├── FAQ.tsx          # Questions & Answers
│   └── Footer.tsx       # Site footer
└── ...
```

## 🎨 Customization

You can customize the content and styles by editing the components in the `src/components` directory. Global styles and Tailwind configuration can be found in `src/app/globals.css`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
