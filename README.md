# Saish Solanki - Portfolio Website

A modern, responsive portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS, showcasing cybersecurity expertise and professional experience.

## 🚀 Features

- **Next.js 13+ App Router** - Latest Next.js features with TypeScript
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Mode** - Seamless theme switching with next-themes
- **MDX Content** - Blog posts and project case studies with Contentlayer
- **Animations** - Smooth animations with Framer Motion
- **SEO Optimized** - Meta tags, sitemap, robots.txt, and JSON-LD
- **Performance Focused** - Optimized for Core Web Vitals
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Type Safe** - Full TypeScript support throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Content**: Contentlayer for MDX processing
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
├── src/
│   ├── app/                    # App Router pages
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog listing
│   │   ├── contact/           # Contact form
│   │   ├── projects/          # Projects showcase
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── not-found.tsx      # 404 page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── header.tsx         # Navigation header
│   │   ├── footer.tsx         # Site footer
│   │   └── theme-provider.tsx # Theme context
│   ├── lib/                   # Utility functions
│   └── styles/                # Additional styles
├── content/                   # MDX content
│   ├── posts/                 # Blog posts
│   └── projects/              # Project case studies
├── public/                    # Static assets
│   └── images/                # Images and media
├── contentlayer.config.ts     # Content processing
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS config
└── tsconfig.json              # TypeScript config
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saishsolanki/saishsolanki.github.io.git
   cd saishsolanki.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 📝 Content Management

### Adding Blog Posts

Create new MDX files in `content/posts/`:

```markdown
---
title: "Your Post Title"
date: "2023-12-01"
description: "Post description"
tags: ["tag1", "tag2"]
published: true
---

# Your content here

Write your blog post content in MDX format.
```

### Adding Projects

Create new MDX files in `content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
date: "2023-12-01"
tags: ["React", "TypeScript"]
featured: true
github: "https://github.com/user/repo"
live: "https://example.com"
---

# Project details here
```

## 🎨 Customization

### Theme Colors

Edit `src/styles/globals.css` to customize the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other variables */
}
```

### Components

All UI components are built with shadcn/ui and can be customized in `src/components/ui/`.

### Typography

Font configuration is in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['ui-sans-serif', 'system-ui', /* ... */],
},
```

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic with Next.js App Router
- **Bundle Analysis**: Built-in webpack bundle analyzer

## 🔍 SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Auto-generated with next-sitemap
- **Robots.txt**: Search engine crawling instructions

## 🚀 Deployment

### GitHub Pages

The site is configured for deployment to GitHub Pages:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy** (automated via GitHub Actions)
   ```bash
   git push origin main
   ```

### Custom Domain

To use a custom domain:

1. Add `CNAME` file to `public/` directory
2. Configure DNS settings
3. Update `next-sitemap.config.js` with new domain

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Theme switching functions properly
- [ ] Forms submit successfully
- [ ] Images load with proper optimization
- [ ] Links work correctly
- [ ] SEO meta tags are present

### Lighthouse Audit

Run Lighthouse audits regularly:

```bash
npm run build
npm start
# Run Lighthouse on localhost:3000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Saish Solanki**
- Website: [saishsolanki.github.io](https://saishsolanki.github.io)
- Email: contact@saishsolanki.dev
- LinkedIn: [linkedin.com/in/saishsolanki](https://linkedin.com/in/saishsolanki)
- GitHub: [@saishsolanki](https://github.com/saishsolanki)

---

## 🔄 Changelog

### Version 2.0.0 (2023-12-15)
- ✨ **New**: Complete Next.js 13+ App Router migration
- ✨ **New**: TypeScript implementation
- ✨ **New**: Tailwind CSS + shadcn/ui design system
- ✨ **New**: MDX content with Contentlayer
- ✨ **New**: Dark/light theme support
- ✨ **New**: Framer Motion animations
- ✨ **New**: Contact form with validation
- ✨ **New**: Project showcase with filtering
- ✨ **New**: Blog with syntax highlighting
- ✨ **New**: SEO optimization
- ✨ **New**: Performance optimizations
- 🗑️ **Removed**: Legacy HTML5UP template
- 🗑️ **Removed**: jQuery dependencies

### Version 1.0.0 (2022-07-01)
- 🎉 Initial HTML5UP template implementation
- ✨ Basic portfolio structure
- ✨ Project showcase
- ✨ Contact information

---

**Built with ❤️ and ☕ by Saish Solanki**