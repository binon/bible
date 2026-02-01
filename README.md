# Bible App - Tamil & English Parallel Translation

A modern web application for reading the Holy Bible with Tamil and English verses displayed in parallel. Built with React and Vite for a fast, responsive experience that can be adapted for mobile apps.

🔗 **Live Demo**: [https://binon.github.io/bible/](https://binon.github.io/bible/)

## Features

- 📖 **Parallel Translation**: View Tamil and English verses side by side
- 📚 **Complete Bible Structure**: All 66 books (Old & New Testament) with proper organization
- 📱 **Mobile Responsive**: Works seamlessly on phones, tablets, and desktops
- 🚀 **Fast Performance**: Built with Vite for lightning-fast loading
- 🎨 **Modern UI**: Clean, beautiful interface with gradient design
- 📚 **Easy Navigation**: Simple book and chapter selection with Testament grouping
- 🌐 **Cross-platform Ready**: Foundation for future Android and iOS apps
- ⚡ **GitHub Pages Deployed**: Automatically deployed on every push to main

## Currently Available Content

- **Genesis (ஆதியாகமம்)** - Chapter 1 (all 31 verses)
- **John (யோவான்)** - Chapters 1 & 3 (selected verses)

All 66 books are available in the navigation with proper chapter counts. Additional content can be easily added by editing the `bibleData.js` file.

## Getting Started

### Prerequisites

- Node.js 20.19.0 or higher (or Node.js 22.12.0+)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/binon/bible.git
cd bible
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/bible/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Initial Setup

1. Go to your repository settings on GitHub
2. Navigate to **Pages** under **Code and automation**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on the next push to `main`

### Manual Deployment

You can also trigger a manual deployment:
1. Go to the **Actions** tab in your GitHub repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow** and select the branch

The app will be available at: `https://<your-username>.github.io/bible/`

## Project Structure

```
bible/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages deployment workflow
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.jsx             # Application entry point
│   └── bibleData.js         # Bible verses data and metadata
├── index.html               # HTML template
├── vite.config.js           # Vite configuration with base path
└── package.json             # Dependencies and scripts
```

## Adding More Bible Data

To add more books, chapters, or verses, edit `src/bibleData.js`:

### Adding Content to Existing Books

```javascript
// In the bibleData.books array, add verses to existing chapters
{
  id: "john",
  name: { english: "John", tamil: "யோவான்" },
  testament: "new",
  chapters: [
    {
      number: 1,
      verses: [
        {
          number: 1,
          text: {
            english: "English verse text",
            tamil: "தமிழ் வசனம்"
          }
        }
        // Add more verses...
      ]
    }
    // Add more chapters...
  ]
}
```

### Adding New Books with Content

```javascript
// Add to the bibleData.books array
{
  id: "book-id",
  name: {
    english: "Book Name",
    tamil: "புத்தக பெயர்"
  },
  testament: "old", // or "new"
  chapters: [
    {
      number: 1,
      verses: [
        {
          number: 1,
          text: {
            english: "English verse text",
            tamil: "தமிழ் வசனம்"
          }
        }
      ]
    }
  ]
}
```

All books are already registered in the `bibleMetadata` object with proper chapter counts, so they appear in the navigation even without content.

## Integrating External Bible APIs

You can integrate external Bible APIs (such as https://github.com/wldeh/bible-api or others) to dynamically load Bible content:

1. Creating an API service in `src/services/bibleApi.js`
2. Fetching data dynamically based on selected book/chapter
3. Updating the App component to handle async data loading
4. Adding loading states and error handling

Example API integration:
```javascript
// src/services/bibleApi.js
export async function fetchChapter(bookId, chapterNum, version = 'en-kjv') {
  const response = await fetch(
    `https://your-api.com/bibles/${version}/books/${bookId}/chapters/${chapterNum}.json`
  );
  return response.json();
}
```

## Future Mobile Development

This web app serves as the foundation for mobile applications:

### For React Native (iOS & Android)
- The component structure can be easily adapted to React Native
- The data structure in `bibleData.js` can be reused as-is
- UI components can be converted to React Native equivalents

### For Flutter
- The data structure can be converted to Dart
- UI design patterns can be replicated

### For Native Development
- The data can be exported to JSON for use in native apps
- The API structure provides a clear contract for mobile implementations

## Technology Stack

- **React 19** - UI framework
- **Vite 7** - Build tool and development server
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Modern JavaScript features
- **GitHub Actions** - Automatic deployment to GitHub Pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! To add more Bible verses or improve the app:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/add-more-verses`)
3. Add your changes to `src/bibleData.js`
4. Commit your changes (`git commit -m 'Add Matthew chapter 1'`)
5. Push to the branch (`git push origin feature/add-more-verses`)
6. Open a Pull Request

## License

MIT License - feel free to use this project for any purpose.

## Roadmap

- [x] All 66 Bible books structure with Tamil names
- [x] Parallel Tamil & English verse display
- [x] Responsive mobile design
- [x] GitHub Pages deployment
- [ ] Add complete Bible text (all books, chapters, and verses)
- [ ] Add search functionality
- [ ] Add bookmarking feature
- [ ] Add verse sharing capability
- [ ] Add more translations (other Indian languages)
- [ ] Add audio reading feature
- [ ] Develop React Native mobile app
- [ ] Add offline support with PWA
- [ ] Add daily verse notifications
- [ ] Integrate with external Bible APIs

## Acknowledgments

- Bible verses from Tamil and English translations
- Built with modern web technologies for optimal performance
- Deployed automatically to GitHub Pages
