# Quick Setup Guide

## Step 1: Personalize Your Portfolio

### 1. Update Personal Information
Edit `src/data/portfolioData.ts`:

```typescript
export const portfolioData = {
  name: 'Your Full Name',  // ← Change this
  profession: 'AI Developer & Prompt Engineer',  // ← Update if needed
  githubUrl: 'https://github.com/yourusername',  // ← Your GitHub URL
  linkedinUrl: 'https://linkedin.com/in/yourusername',  // ← Your LinkedIn URL
  email: 'your.email@example.com',  // ← Your email
  // ... rest of the data
};
```

### 2. Add Your Profile Image
1. Add your profile photo to `public/profile.jpg`
2. Recommended size: 800x800px (square image works best)
3. The image will be displayed in a circular frame in the About section

### 3. Add Your Resume
1. Add your resume PDF to `public/resume.pdf`
2. The download button in the Details section will automatically link to this file

### 4. Add Education Institution Images
1. Add institution logo/images to the `public/` folder
2. Update the `image` paths in `portfolioData.education` array
3. Example: `image: '/university1.jpg'`

### 5. Update Projects
Edit the `projects` array in `portfolioData.ts`:
- Add your project titles and descriptions
- Add links: `liveLink`, `githubLink`, `videoLink` (all optional)
- Update technologies used
- Add project images if available (optional)

### 6. Update Skills
Modify the `skills` array:
- Update skill names
- Adjust proficiency levels (0-100)
- Add or remove skills as needed

### 7. Update Education
Edit the `education` array:
- Add your educational background
- Include degree, field, year, and institution
- Add institution images
- Include relevant details

### 8. Update Achievements
Modify the `achievements` array:
- Update counts and descriptions
- Add or remove achievement items

## Step 2: Test the Portfolio

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   - Navigate to `http://localhost:5173`
   - Test all sections
   - Check mobile responsiveness
   - Test dark/light mode toggle
   - Verify all links work

3. **Test the contact form:**
   - Fill out the form
   - Verify validation works
   - Note: Currently uses a simulated submission
   - To connect to a real backend, update the `handleSubmit` function in `Contact.tsx`

## Step 3: Connect Contact Form to Backend (Optional)

To connect the contact form to a real email service:

1. Update `src/components/Contact.tsx`
2. Replace the simulated API call in `handleSubmit` with your backend endpoint:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);
  
  try {
    const response = await fetch('YOUR_BACKEND_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Step 4: Build for Production

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

3. **Deploy:**
   - Deploy the `dist` folder to your hosting service
   - Popular options: Vercel, Netlify, GitHub Pages, etc.

## Customization Tips

### Change Colors
Edit `tailwind.config.js` to customize the color palette.

### Modify Animations
Adjust animation durations and effects in individual component files by modifying the `variants` objects in Framer Motion.

### Add More Sections
1. Create a new component in `src/components/`
2. Add it to `App.tsx`
3. Add a navigation item in `Navbar.tsx`

## Troubleshooting

### Images not showing?
- Ensure image paths in `portfolioData.ts` match files in the `public/` folder
- Check that image filenames are correct (case-sensitive on some systems)
- Verify images are in the `public/` directory, not `src/`

### Resume download not working?
- Ensure `resume.pdf` exists in the `public/` folder
- Check the filename matches exactly (case-sensitive)

### Build errors?
- Run `npm install` to ensure all dependencies are installed
- Check that all imports are correct
- Verify TypeScript types are properly defined

## Need Help?

- Check the main README.md for more details
- Review component files for code comments
- Consult Framer Motion and Tailwind CSS documentation

Happy coding! 🚀

