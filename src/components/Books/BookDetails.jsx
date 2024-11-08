import { useParams } from "react-router-dom";

export default function BookDetails(){
    const params = useParams();
    const{bookId} = params
    console.log(bookId)
    return (
        
        <h2>Book Details Section</h2>
    );
}