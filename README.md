# Harsh Sharma - Portfolio Website

A clean, modern, and responsive portfolio website showcasing my education, skills, projects, certifications, and accomplishments.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean interface with smooth animations and transitions
- **Interactive Elements**: Hover effects, scroll animations, and smooth navigation
- **Contact Integration**: Direct email links and social media integration
- **Fast Loading**: Optimized performance with minimal dependencies
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Google Fonts (Inter)

## 📁 Project Structure

```
portfolio-project/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🚀 Deployment on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio` or `username.github.io`)
4. Make it **Public**
5. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using Git Command Line**

```bash
# Navigate to your project folder
cd path/to/portfolio-project

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/harshsharma745/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Web Interface**

1. In your repository, click "uploading an existing file"
2. Drag and drop all three files (index.html, styles.css, script.js)
3. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be published at: `https://harshsharma745.github.io/portfolio/`

### Step 4: Custom Domain (Optional)

If you want to use a custom domain:

1. Buy a domain from any registrar
2. In repository Settings → Pages → Custom domain
3. Enter your domain name
4. Configure DNS settings with your domain provider

## 📧 Contact Integration

The website includes multiple ways to contact:

- **Email**: Direct mailto links to harshsharma2444@gmail.com
- **Phone**: Click-to-call functionality
- **LinkedIn**: Link to your LinkedIn profile
- **GitHub**: Link to your GitHub profile

All contact links are functional and ready to use!

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #6366f1;      /* Main purple color */
    --secondary: #8b5cf6;    /* Secondary purple */
    --accent: #3b82f6;       /* Accent blue */
    --dark: #1e1b4b;         /* Dark color */
    --light: #f8fafc;        /* Light background */
}
```

### Adding More Projects

Add new project cards in the projects section of `index.html`:

```html
<div class="project-card">
    <div class="project-header">
        <div class="project-icon">🎯</div>
        <h3>Your Project Name</h3>
        <span class="project-type">Project Type</span>
    </div>
    <div class="project-body">
        <p>Your project description...</p>
    </div>
</div>
```

### Adding Skills

Add new skill tags in the skills section:

```html
<span class="skill-tag">New Skill</span>
```

## 📱 Mobile Responsive

The website is fully responsive with breakpoints at:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## ⚡ Performance

- Minimal external dependencies
- Optimized CSS and JavaScript
- Fast loading times
- Smooth animations with CSS transitions

## 📄 License

This project is open source and available for personal use.

## 🤝 Connect With Me

- **Email**: harshsharma2444@gmail.com
- **LinkedIn**: [Harsh Sharma](https://www.linkedin.com/in/harsh-sharma-445b66302)
- **GitHub**: [harshsharma745](https://github.com/harshsharma745)
- **Location**: Alwar, Rajasthan, India

## 🙏 Acknowledgments

- Font: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- Icons: Emoji icons for cross-platform compatibility
- Color Scheme: Custom purple/blue gradient theme

---

**Made with ❤️ by Harsh Sharma**

For any questions or collaboration opportunities, feel free to reach out!
