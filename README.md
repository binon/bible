# Bible App - Tamil & English Parallel Translation

A modern web application for reading the Holy Bible with Tamil and English verses displayed in parallel. Built with React and Vite for a fast, responsive experience that can be adapted for mobile apps.

## Features

- 📖 **Parallel Translation**: View Tamil and English verses side by side
- 📱 **Mobile Responsive**: Works seamlessly on phones, tablets, and desktops
- 🚀 **Fast Performance**: Built with Vite for lightning-fast loading
- 🎨 **Modern UI**: Clean, beautiful interface with gradient design
- 📚 **Easy Navigation**: Simple book and chapter selection
- 🌐 **Cross-platform Ready**: Foundation for future Android and iOS apps

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

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
bible/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── bibleData.js     # Bible verses data
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Adding More Bible Data

To add more books, chapters, or verses, edit `src/bibleData.js`:

```javascript
export const bibleData = {
  books: [
    {
      id: "book-id",
      name: {
        english: "Book Name",
        tamil: "புத்தக பெயர்"
      },
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
  ]
};
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
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Modern JavaScript features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! To add more Bible verses or improve the app:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for any purpose.

## Roadmap

- [ ] Add complete Bible text (all books, chapters, and verses)
- [ ] Add search functionality
- [ ] Add bookmarking feature
- [ ] Add verse sharing capability
- [ ] Add more translations (other languages)
- [ ] Add audio reading feature
- [ ] Develop React Native mobile app
- [ ] Add offline support with PWA
- [ ] Add daily verse notifications

## Acknowledgments

- Bible verses from Tamil and English translations
- Built with modern web technologies for optimal performance
