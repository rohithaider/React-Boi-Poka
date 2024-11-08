import { useLoaderData, useParams } from "react-router-dom";

export default function BookDetails(){
    const params = useParams();
    const{bookId} = params
    const id = parseInt(bookId)
    
    const data = useLoaderData()
    
    const book = data.find(book=> book.bookId === id)
    
    const {bookId:currentBookId,image} =book;
    return (
        
       <div className="my-12">
         <h2>Book Details:{currentBookId}</h2>
         <img src={image} className="w-36" alt="" />
         <br />
         <button className="btn btn-accent btn-outline mr-4">Read</button>
         <button className="btn btn-accent">WishList</button>
       </div>
    );
}