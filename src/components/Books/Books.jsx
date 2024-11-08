import React, { useState, useEffect } from "react";
import Book from "./Book";

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/public/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center font-bold">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          books.map(book=><Book key={book.id} book={book}/>)
        }
      </div>
    </div>
  );
}
