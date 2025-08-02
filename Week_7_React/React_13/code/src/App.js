import React, { useState } from 'react';
import { books, blogs, courses } from './data';
import DetailsColumn from './components/DetailsColumn';

function App() {
  const [isGuest, setIsGuest] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📘 Blogger App</h1>

      {/* Buttons (static) */}
      <div style={{ marginBottom: '10px' }}>
        <button>Book</button>{' '}
        <button>Blog</button>{' '}
        <button>Course</button>{' '}
        <button onClick={() => setIsGuest(!isGuest)}>
          {isGuest ? 'Login' : 'Logout'}
        </button>
      </div>

      {/* Subheading */}
      <h2>📖 Book Details Component</h2>

      {/* Guest Message */}
      {isGuest && (
        <p style={{ color: 'crimson', fontWeight: 'bold' }}>
          You are viewing as a guest. ❌
        </p>
      )}

      {/* 3-Column Layout */}
      <div style={{ display: 'flex', marginTop: '20px' }}>
        {/* Course Details */}
        <DetailsColumn title="Course Details">
          {courses.map((course, index) => (
            <div key={index}>
              <p>{course.name}</p>
              <p>{course.date}</p>
            </div>
          ))}
        </DetailsColumn>

        {/* Book Details */}
        <DetailsColumn title="Book Details">
          {books.map((book) => (
            <div key={book.id}>
              <p>{book.bname}</p>
              <p>{book.price}</p>
            </div>
          ))}
        </DetailsColumn>

        {/* Blog Details */}
        <DetailsColumn title="Blog Details">
          {blogs.map((blog, index) => (
            <div key={index}>
              <p><strong>{blog.title}</strong></p>
              <p>{blog.author}</p>
              <p>{blog.content}</p>
            </div>
          ))}
        </DetailsColumn>
      </div>
    </div>
  );
}

export default App;
