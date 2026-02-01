import { useState } from 'react';
import { bibleData, bibleMetadata } from './bibleData';
import './App.css';

function App() {
  const [selectedBook, setSelectedBook] = useState(bibleData.books[0].id);
  const [selectedChapter, setSelectedChapter] = useState(1);

  // Get all books from metadata
  const allBooks = [...bibleMetadata.oldTestament, ...bibleMetadata.newTestament];
  
  // Find current book data (may not have content yet)
  const currentBookData = bibleData.books.find(book => book.id === selectedBook);
  const currentBookMeta = allBooks.find(book => book.id === selectedBook);
  
  // Get chapter if available
  const currentChapter = currentBookData?.chapters.find(ch => ch.number === selectedChapter);

  const handleBookChange = (e) => {
    const newBookId = e.target.value;
    setSelectedBook(newBookId);
    setSelectedChapter(1); // Reset to chapter 1 when changing books
  };

  const handleChapterChange = (e) => {
    setSelectedChapter(parseInt(e.target.value));
  };

  // Generate chapter options based on metadata
  const getChapterOptions = () => {
    if (currentBookData) {
      // If we have data for this book, show available chapters
      return currentBookData.chapters.map(ch => ch.number);
    } else if (currentBookMeta) {
      // If we only have metadata, show all possible chapters (but no content)
      return Array.from({ length: currentBookMeta.chapters }, (_, i) => i + 1);
    }
    return [1];
  };

  const chapterOptions = getChapterOptions();

  return (
    <div className="app">
      <header className="header">
        <h1>📖 Holy Bible</h1>
        <p>Tamil & English Parallel Translation</p>
      </header>

      <nav className="navigation">
        <div className="nav-controls">
          <div className="nav-group">
            <label htmlFor="book-select">Book</label>
            <select 
              id="book-select"
              value={selectedBook} 
              onChange={handleBookChange}
            >
              <optgroup label="Old Testament / பழைய ஏற்பாடு">
                {bibleMetadata.oldTestament.map(book => (
                  <option key={book.id} value={book.id}>
                    {book.name.english} / {book.name.tamil}
                  </option>
                ))}
              </optgroup>
              <optgroup label="New Testament / புதிய ஏற்பாடு">
                {bibleMetadata.newTestament.map(book => (
                  <option key={book.id} value={book.id}>
                    {book.name.english} / {book.name.tamil}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="nav-group">
            <label htmlFor="chapter-select">Chapter</label>
            <select 
              id="chapter-select"
              value={selectedChapter} 
              onChange={handleChapterChange}
            >
              {chapterOptions.map(chNum => (
                <option key={chNum} value={chNum}>
                  Chapter {chNum}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      <div className="verses-container">
        {currentChapter ? (
          <>
            <div className="chapter-header">
              <h2>
                {currentBookMeta?.name.english || currentBookData?.name.english} / {' '}
                {currentBookMeta?.name.tamil || currentBookData?.name.tamil}
              </h2>
              <p>Chapter {currentChapter.number}</p>
            </div>

            {currentChapter.verses.map(verse => (
              <div key={verse.number} className="verse">
                <div className="verse-number">Verse {verse.number}</div>
                <div className="verse-content">
                  <div className="verse-text english">
                    <div className="verse-label">English</div>
                    <div>{verse.text.english}</div>
                  </div>
                  <div className="verse-text tamil">
                    <div className="verse-label">Tamil / தமிழ்</div>
                    <div>{verse.text.tamil}</div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="no-verses">
            <h3>Content Not Yet Available</h3>
            <p>
              Full Bible content for {currentBookMeta?.name.english} Chapter {selectedChapter} is being prepared.
              <br /><br />
              Currently available chapters:
            </p>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li>📖 Genesis (ஆதியாகமம்) - Chapter 1 (31 verses)</li>
              <li>📖 John (யோவான்) - Chapters 1 & 3</li>
            </ul>
            <p style={{marginTop: '20px', fontSize: '0.9em', color: '#666'}}>
              <strong>Note:</strong> This is a demonstration version. To add more content, 
              edit the <code>bibleData.js</code> file or integrate with a Bible API.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
