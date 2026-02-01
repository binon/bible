import { useState } from 'react';
import { bibleData } from './bibleData';
import './App.css';

function App() {
  const [selectedBook, setSelectedBook] = useState(bibleData.books[0].id);
  const [selectedChapter, setSelectedChapter] = useState(1);

  const currentBook = bibleData.books.find(book => book.id === selectedBook);
  const currentChapter = currentBook?.chapters.find(ch => ch.number === selectedChapter);

  const handleBookChange = (e) => {
    const newBookId = e.target.value;
    setSelectedBook(newBookId);
    setSelectedChapter(1); // Reset to chapter 1 when changing books
  };

  const handleChapterChange = (e) => {
    setSelectedChapter(parseInt(e.target.value));
  };

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
              {bibleData.books.map(book => (
                <option key={book.id} value={book.id}>
                  {book.name.english} / {book.name.tamil}
                </option>
              ))}
            </select>
          </div>

          <div className="nav-group">
            <label htmlFor="chapter-select">Chapter</label>
            <select 
              id="chapter-select"
              value={selectedChapter} 
              onChange={handleChapterChange}
            >
              {currentBook?.chapters.map(chapter => (
                <option key={chapter.number} value={chapter.number}>
                  Chapter {chapter.number}
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
              <h2>{currentBook.name.english} / {currentBook.name.tamil}</h2>
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
          <div className="no-verses">No verses available</div>
        )}
      </div>
    </div>
  );
}

export default App;
