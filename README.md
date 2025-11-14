# Premium AI Developer Portfolio

A stunning, animated portfolio website for AI Developers & Prompt Engineers built with React, TypeScript, Framer Motion, and Tailwind CSS.

## Features

✨ **Premium Design**
- Elegant color scheme: Deep navy, royal gold accents, soft ivory/cool slate backgrounds
- Glassmorphism effects and gradient animations
- Smooth parallax scrolling and micro-interactions
- Responsive design for all devices
- Light/Dark mode toggle

🎨 **Sections**
- **Header**: Animated name and profession with social media icons
- **About**: Circular profile picture with elegant animations
- **Skills**: Animated skill cards with progress bars
- **Projects**: Interactive project cards with live links, GitHub repos, and video demos
- **Education**: Timeline with institution profile photos
- **Achievements**: Animated counters and styled cards
- **Resume Download**: Prominent download button for PDF resume
- **Contact**: Validated contact form with animations

🚀 **Technologies**
- React 19
- TypeScript
- Framer Motion (animations)
- Tailwind CSS 4
- React Icons
- Vite

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Your Data**
   Edit `src/data/portfolioData.ts` to add your personal information:
   - Name and profession
   - GitHub and LinkedIn URLs
   - Email address
   - Profile image path
   - Skills, projects, education, achievements
   - Resume PDF path

3. **Add Your Assets**
   - Add your profile picture to `public/profile.jpg`
   - Add education institution images to `public/` (update paths in portfolioData.ts)
   - Add your resume PDF to `public/resume.pdf`
   - Add project images if available (update paths in portfolioData.ts)

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme. The current theme includes:
- Navy: Deep blue shades
- Gold: Royal gold accents
- Ivory: Light backgrounds
- Slate: Cool gray backgrounds

### Animations
All animations use Framer Motion. Customize animations in individual component files by adjusting the `variants` objects.

### Content
Update all content in `src/data/portfolioData.ts`. This includes:
- Personal information
- Skills and proficiency levels
- Projects with links
- Education history
- Achievements
- Contact information

## Project Structure

```
src/
├── components/       # React components
│   ├── Header.tsx
│   ├── Navbar.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Achievements.tsx
│   ├── Details.tsx
│   └── Contact.tsx
├── contexts/         # React contexts
│   └── ThemeContext.tsx
├── data/            # Data constants
│   └── portfolioData.ts
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── style.css        # Global styles
```

## Features in Detail

### Navigation
- Sticky navbar with smooth scroll
- Active section highlighting
- Mobile-responsive menu
- Theme toggle

### Animations
- Entrance animations for all sections
- Hover effects on interactive elements
- Parallax scrolling effects
- Smooth transitions throughout

### Forms
- Contact form with validation
- Real-time error messages
- Success/error states
- Animated feedback

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Touch-friendly interactions
- Optimized for all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this portfolio for your own projects!

## Credits

Built with ❤️ using React, Framer Motion, and Tailwind CSS.

