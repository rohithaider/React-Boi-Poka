import { useLoaderData, useParams } from "react-router-dom";

import { addToReadList } from "../../Utility/utility";

export default function BookDetails() {
  const params = useParams();
  const { bookId } = params;
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const { bookId: currentBookId, image } = book;

  function handleClick(id) {
    addToReadList(id);
  }

  return (
    <div className="my-12">
      <h2>Book Details:{currentBookId}</h2>
      <img src={image} className="w-36" alt="" />
      <br />
      <button
        onClick={() => handleClick(id)}
        className="btn btn-accent btn-outline mr-4"
      >
        Mark as read
      </button>
      <button className="btn btn-accent">WishList</button>
    </div>
  );
}
