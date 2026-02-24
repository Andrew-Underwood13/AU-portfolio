# Andrew Underwood - Cybersecurity Portfolio

A modern portfolio website showcasing cybersecurity projects, experience, and involvement. Built with React, Vite, and Tailwind CSS, featuring a clean design with gold accent colors inspired by the periodic table element Au (Gold).

## Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS v4
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: Motion (Framer Motion) animations for enhanced user experience
- **Cybersecurity Theme**: Terminal commands, circuit patterns, and hacker-style visual elements
- **SEO Optimized**: Semantic HTML and proper meta tags

##  Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm

##  Installation

1. **Clone or download this repository**

2. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Add your profile photo**:
   - Place your profile photo in the `/public` folder
   - Name it `profile-photo.jpg` (or update the path in `/src/app/components/Hero.tsx`)
   - Recommended: Square image, at least 500x500px

4. **Start the development server**:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser** to `http://localhost:5173`

##  Build for Production

To create a production build:

```bash
pnpm build
# or
npm run build
```

The built files will be in the `/dist` folder, ready to deploy to any static hosting service.

##  Deployment Options

This portfolio can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Update `vite.config.ts` to set the correct base path
2. Run `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## Project Structure

```
├── public/              # Static assets
│   ├── favicon.svg
│   └── profile-photo.jpg (add your own)
├── src/
│   ├── app/
│   │   ├── components/  # React components
│   │   │   ├── BinaryRain.tsx
│   │   │   ├── CircuitPattern.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── CyberBackground.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Involvement.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── ui/      # Reusable UI components
│   │   └── App.tsx      # Main app component
│   └── styles/          # CSS files
│       ├── fonts.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── package.json
├── vite.config.ts
└── README.md
```

##  Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **Hero Section** (`/src/app/components/Hero.tsx`):
   - Name, title, bio
   - Social links (GitHub, LinkedIn, Email)

2. **Education** (`/src/app/components/Education.tsx`):
   - University, degree, graduation date
   - Coursework and achievements

3. **Experience** (`/src/app/components/Experience.tsx`):
   - Job title, company, dates
   - Responsibilities and achievements

4. **Projects** (`/src/app/components/Projects.tsx`):
   - Project details, descriptions, technologies
   - GitHub links and demo URLs

5. **Involvement** (`/src/app/components/Involvement.tsx`):
   - Clubs, certifications, activities

6. **Contact** (`/src/app/components/Contact.tsx`):
   - Email address and location

### Change Color Scheme

The current theme uses gold accent colors. To change:
- Edit `/src/styles/theme.css` for custom CSS variables
- The primary color is yellow-500 (gold) - search and replace with your preferred Tailwind color

##  Technologies Used

- **React 18.3** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Motion** (Framer Motion) - Animation library
- **Lucide React** - Icon library
- **Material-UI** - Additional UI components
- **Radix UI** - Accessible component primitives

##  License

This project is open source and available under the MIT License.

## Acknowledgments

- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Stock photos from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)

## 📧Contact

Andrew Underwood - aunde17@lsu.edu

Project Link: [https://github.com/Andrew-Underwood13](https://github.com/Andrew-Underwood13)
