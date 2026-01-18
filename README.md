# 🌟 Chetna Padhi - Portfolio Website

A modern, responsive portfolio website built with React, showcasing projects, skills, experience, and achievements. Features dark/light theme switching, smooth animations, and an integrated contact form.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-FF0080)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [File Structure](#-file-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [License](#-license)

---

## ✨ Features

### 🎨 Design & UI
- **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Powered by Framer Motion for delightful interactions
- **Modern Glassmorphism** - Beautiful backdrop blur effects and gradients

### 📱 Sections
- **Hero Section** - Eye-catching introduction with typing animation
- **About** - Professional summary with custom profile image
- **Skills** - Animated infinite carousels showcasing tech stack
- **Experience** - Expandable cards for internships and work history
- **Projects** - Detailed project showcases with modal popups
- **Rewards & Achievements** - Certificates and accomplishments
- **Contact Form** - Integrated with EmailJS for direct messaging

### 🔗 Integrations
- **EmailJS** - Contact form with custom email templates
- **Social Media Links** - LinkedIn, GitHub, Instagram integration
- **Responsive Navigation** - Sticky header with smooth scroll

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18.3.1** | Frontend framework |
| **Tailwind CSS 3.4.17** | Utility-first CSS framework |
| **Framer Motion 12.23.24** | Animation library |
| **Lucide React** | Icon library |
| **Radix UI** | Headless UI components (Dialog) |
| **EmailJS** | Email integration for contact form |
| **PostCSS & Autoprefixer** | CSS processing |

---

## 📁 File Structure

```
chetna-padhi-portfolio-website-main/
│
├── public/
│   ├── About.png              # Profile image for About section
│   ├── Dark-mode.svg          # Logo for dark theme
│   ├── Light-mode.svg         # Logo for light theme
│   ├── favicon.svg            # Website favicon
│   └── index.html             # HTML entry point
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx     # Reusable button component
│   │   │   └── Dialog.jsx     # Modal dialog component
│   │   └── ThemeProvider.jsx  # Theme context provider
│   │
│   ├── App.jsx                # Main application component
│   ├── index.css              # Global styles & Tailwind imports
│   └── index.js               # React DOM entry point
│
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies & scripts
├── package-lock.json          # Locked dependencies
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md                  # Project documentation
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chetnapadhi/portfolio-website.git
   cd chetna-padhi-portfolio-website-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## ⚙️ Configuration

### EmailJS Setup

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)

2. **Get your credentials:**
   - Public Key: `z0LVHCV9bqVXwFm4R`
   - Service ID: `service_xbdclad`
   - Template ID: `template_81yjihd`

3. **Update `src/App.jsx`** (already configured):
   ```javascript
   emailjs.init('z0LVHCV9bqVXwFm4R');
   
   await emailjs.send(
     'service_xbdclad',
     'template_81yjihd',
     templateParams
   );
   ```

4. **EmailJS Template Variables:**
   - `{{from_name}}` - Contact's name
   - `{{reply_to}}` - Contact's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Contact's message
   - `{{current_date}}` - Submission timestamp

### Customization

#### Update Personal Information
Edit `src/App.jsx` to customize:
- Name, location, and bio
- Experience and work history
- Projects and achievements
- Skills and tech stack
- Social media links

#### Change Theme Colors
Modify `tailwind.config.js` to adjust color schemes.

#### Replace Images
- Add your profile photo as `public/About.png`
- Update logos: `public/Light-mode.svg` and `public/Dark-mode.svg`
- Change favicon: `public/favicon.svg`

---

## 💻 Usage

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects from Create React App (⚠️ irreversible) |

### Development

```bash
# Start development server with hot reload
npm start
```

### Production Build

```bash
# Create optimized production build
npm run build

# The build folder will contain the production-ready files
```

---

## 🌐 Deployment

### Recommended Platforms

#### **Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

#### **Netlify**
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`

#### **GitHub Pages**
```bash
npm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://chetnapadhi.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

#### **Firebase Hosting**
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

---

## 🔧 Troubleshooting

### Common Issues

**Issue:** Email not sending
- Verify EmailJS credentials in `src/App.jsx`
- Check EmailJS dashboard for quota limits
- Ensure template variables match

**Issue:** Theme not persisting
- Check browser localStorage permissions
- Clear cache and cookies

**Issue:** Build errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Chetna Padhi**

- Portfolio: [Your Portfolio URL]
- LinkedIn: [linkedin.com/in/chetna-padhi](https://www.linkedin.com/in/chetna-padhi/)
- GitHub: [github.com/Chetnapadhi](https://github.com/Chetnapadhi)
- Instagram: [instagram.com/chetna_padhi](https://www.instagram.com/chetna_padhi/)
- Email: padhichetn@gmail.com

---

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI Components inspired by [Radix UI](https://www.radix-ui.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Chetnapadhi/portfolio-website)
![GitHub last commit](https://img.shields.io/github/last-commit/Chetnapadhi/portfolio-website)
![GitHub stars](https://img.shields.io/github/stars/Chetnapadhi/portfolio-website?style=social)

---

Made with ❤️ by Chetna Padhi
