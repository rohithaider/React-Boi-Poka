import { Link } from "react-router-dom";

export default function Book({ book }) {
const {bookId,bookName,author,image,category} = book
  return (
    <Link to={`/books/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-xl p-10 border ">
        <div className="badge badge-outline mb-4">{category}</div>
      <figure className="bg-gray-600 py-6 rounded-xl">
        <img
          className="h-[166px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {author}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{bookName}</p>
      
      </div>
    </div>
    </Link>
  );
}
