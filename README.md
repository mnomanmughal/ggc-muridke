# 🎓 Government Graduate College Muridke Website

A modern, responsive React.js website for Govt. Graduate College Muridke, Pakistan.

## ✨ Features

- **Modern Design**: Clean, professional design with green & white academic theme
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Bilingual Support**: Toggle between English and Urdu languages
- **Image Slider**: Auto-sliding hero section with real campus photos
- **Interactive Components**: Smooth animations, hover effects, and transitions
- **Complete Pages**: Home, About, Admissions, Departments, Faculty, Gallery, News, Contact
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Accessible**: WCAG compliant with proper ARIA labels

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Extract the project files**
   ```bash
   unzip college-site-react.zip
   cd college-site-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📂 Project Structure

```
college-site-react/
├── public/
│   └── images/
│       ├── logo.jpeg           # College logo
│       ├── campus1.jpg         # Campus photos
│       ├── campus2.jpg
│       └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with dropdown
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── Hero.jsx            # Sliding hero section
│   │   ├── FacultyCard.jsx     # Faculty member card
│   │   ├── NoticeBoard.jsx     # Announcements component
│   │   ├── GalleryGrid.jsx     # Image gallery with modal
│   │   ├── ScrollToTop.jsx     # Scroll to top button
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp button
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   ├── About.jsx           # About page
│   │   ├── Admissions.jsx      # Admissions info
│   │   ├── Departments.jsx     # Departments showcase
│   │   ├── Faculty.jsx         # Faculty members
│   │   ├── Gallery.jsx         # Image gallery
│   │   ├── News.jsx            # News & announcements
│   │   └── Contact.jsx         # Contact form & map
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── styles.css              # Global styles with Tailwind
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 📄 Available Pages

### 🏠 Home
- Sliding hero section with campus photos
- Principal's message
- Latest announcements
- Quick links cards
- Call-to-action sections

### ℹ️ About
- College history
- Vision & mission
- Facilities showcase
- Statistics

### 🎓 Admissions
- Programs table (FA, FSc, ICS, ICom, BS)
- Admission criteria
- Fee structure
- Important dates
- Download form button

### 🏫 Departments
- Science
- Computer Science
- Commerce
- Arts
- Detailed information for each department

### 👩‍🏫 Faculty
- Faculty member cards
- Search functionality
- Filter by department
- Contact information

### 🖼️ Gallery
- Real campus images
- Category filter
- Modal image preview
- Navigation controls

### 📢 News
- Latest announcements
- Notice board style
- Category badges
- Pinned notices

### 📞 Contact
- Contact form
- Google Maps integration
- Contact information
- Quick contact section

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'college-green': {
    500: '#16a34a', // Main green
    600: '#15803d',
    // ...
  },
}
```

### Fonts
Fonts are loaded from Google Fonts in `index.html`:
- **Display**: Playfair Display (headings)
- **Body**: Crimson Pro (body text)
- **Urdu**: Noto Nastaliq Urdu

### Content
Update the content directly in the page files:
- Faculty members: `src/pages/Faculty.jsx`
- Notices: `src/pages/News.jsx`
- Programs: `src/pages/Admissions.jsx`
- Departments: `src/pages/Departments.jsx`

### Images
Replace images in `public/images/`:
- `logo.jpeg` - College logo
- `campus1.jpg` through `campus7.jpg` - Campus photos

## 🛠️ Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **React Router DOM** - Navigation
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Google Fonts** - Typography

## 📝 Features Breakdown

### Language Toggle
Switch between English and Urdu throughout the site.

### Sliding Hero Section
Auto-playing carousel with:
- 4 campus images
- Navigation arrows
- Slide indicators
- Smooth transitions
- Auto-play (5 seconds)

### Sticky Navbar
- Fixed on scroll
- Dropdown menu for departments
- Mobile-responsive menu
- Language toggle

### Search & Filter
- Faculty search by name/subject
- Department filter
- Gallery category filter

### Interactive Components
- Hover effects on cards
- Smooth animations
- Modal popups
- Form validation

## 🔄 Deployment

### Option 1: Vercel
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

### Option 3: Traditional Hosting
```bash
npm run build
# Upload dist/ folder contents to your web server
```

## 📧 Contact

For any questions or support:
- **Email**: info@ggcmuridke.edu.pk
- **Phone**: +92-495-250123
- **Address**: Main GT Road, Muridke, District Sheikhupura, Punjab

## 📜 License

This project is created for Government Graduate College Muridke.

## 🙏 Acknowledgments

- College administration for providing images and content
- Anthropic Claude for code assistance
- Open source community for tools and libraries

---

**Made with ❤️ for GGC Muridke**
