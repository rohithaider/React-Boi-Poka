import React, { useState, useEffect } from "react";

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
      <p>{books.length}</p>
    </div>
  );
}
