# Lilac Template - Therapist & Wellness Website

A modern, serene, and fully responsive website template designed specifically for therapists, counselors, and wellness professionals. Built with **Next.js 16** and **Tailwind CSS v4**, featuring a sophisticated design system with built-in dark mode support.

## ✨ Features

- **Modern Tech Stack**: Built on the latest Next.js 15 (App Router) features.
- **Responsive Design**: Fully responsive layouts that look beautiful on mobile, tablet, and desktop.
- **Dark Mode Support**:
  - Integrated `next-themes` for seamless light/dark mode switching.
  - Custom toggle button in the header.
  - High-contrast dark mode for accessibility (Deep Gray backgrounds with Light Cream text).
- **Elegant Typography**: Curated font pairing using `DM Serif Display` and `Playfair Display` for headings, and `Inter` for readability.
- **Dynamic Sections**:
  - **Blog**: Grid layout for articles.
  - **Resources**: Curated list of books and tools with custom hover effects.
  - **Crisis Support**: Dedicated section for immediate help resources.
- **SEO Optimized**: Semantic HTML structure and Next.js metadata optimization.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/) (implied usage)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter, DM Serif Display, Playfair Display)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/lilac-website.git
    cd lilac-website
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```bash
lilac-website/
├── public/              # Static assets (images, icons)
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── blog/        # Blog page routes
│   │   ├── contact/     # Contact page routes
│   │   ├── maya/        # Dr. Maya Reynolds landing page
│   │   ├── resources/   # Resources page routes
│   │   ├── globals.css  # Global styles & Tailwind directives
│   │   ├── layout.js    # Root layout & ThemeProvider wrapper
│   │   └── page.js      # Homepage
│   ├── components/      # Reusable UI components
│   │   ├── blog/        # Blog-specific components
│   │   ├── resources/   # Resources-specific components
│   │   ├── Footer.jsx   # Site Footer
│   │   ├── Header.jsx   # Site Header & Navigation
│   │   └── ThemeToggle.jsx # Light/Dark mode toggle
└── tailwind.config.js   # Tailwind configuration
```

## 🎨 Customizing the Theme

### Colors
The color palette is defined in `src/app/globals.css`. You can modify the CSS variables to match your brand:

```css
@theme {
  --color-cream: #f6f3ed;
  --color-green-900: #1c2e1c;
  --color-maya-primary: #6D5D4B;
  /* ... add your own colors */
}
```

### Fonts
Fonts are loaded in `src/app/layout.js` using `next/font/google`. To change them, simply import a different font and add its variable to the `body` class.

## 📦 Deployment

The easiest way to deploy this app is using [Vercel](https://vercel.com/):

1.  Push your code to a GitHub repository.
2.  Import the project in Vercel.
3.  Vercel will automatically detect Next.js and deploy your site.

## 📄 License & Credits

- **Template Design**: Inspired by modern wellness aesthetics.
- **Images**: Placeholder images should be replaced with your own licensed photography.
- **Copyright**: © 2024 Your Business Name Here, LLC. All Rights Reserved.
