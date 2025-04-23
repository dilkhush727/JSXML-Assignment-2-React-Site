# JSXML Assignment 2 React Site

This is a React portfolio site for the JSXML Assignment 2, built with Vite and styled using Bootstrap. It fetches data from an Express/Node.js API deployed on Render, displaying projects and skills dynamically. The site includes routing, a responsive design, and reusable components.

## Features

- **Home Page**: Banner with profile image, social links, and an About section.
- **Projects Page**: Displays project cards with image (fallback if none), description, technologies, and links to live demo and GitHub.
- **Skills Page**: Lists skills categorized into Front-End, Back-End, and Tools.
- **Contact Page**: Bootstrap-styled contact form.
- **Navbar**: Dark-themed, responsive navigation using React Router.
- **Footer**: Global footer with social icons and copyright.

## Live Demo

[View the live site](https://jsxml-assignment-2-react-site.onrender.com/)  

## GitHub Repository

https://github.com/dilkhush727/JSXML-Assignment-2-React-Site

## Getting Started

### Prerequisites

- Node.js (v16+) and npm installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dilkhush727/JSXML-Assignment-2-React-Site.git
   ```
2. Navigate into the project directory:
   ```bash
   cd JSXML-Assignment-2-React-Site
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.


## API Backend

The API is hosted on Render:

- Projects: `https://assignment1-1eq7.onrender.com/admin/projects/api`
- Skills: `https://assignment1-1eq7.onrender.com/admin/skills/api`
