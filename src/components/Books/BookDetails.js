import React from 'react';
import { useParams } from 'react-router-dom';

// import classes from './BookDetails.module.css';

const BookDetails = (props) => {
    const params = useParams();

    console.log(params.bookId);
    return (
        <div>
            <h2>Product details</h2>
            <h3>book-id: {params.bookId}</h3>
        </div>
    );
};

export default BookDetails;