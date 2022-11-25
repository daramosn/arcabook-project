import React from 'react';
import { Link } from 'react-router-dom';

import Book from './Book';

import classes from './Booklist.module.css';

const Booklist = (props) => {
    return (
        <ul className={classes.book_list}>
            {props.list.map(book => (
                <li key={book.id}>
                    <Link to={`book-board/${book.id}`}>
                        <Book
                            cover={book.cover}
                            name={book.name}
                            author={book.author}
                            username={book.username}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Booklist;