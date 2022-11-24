import React from 'react';

import Book from './Book';

import classes from './Booklist.module.css';

const Booklist = (props) => {
    return (
        <ul className={classes.book_list}>
            {props.list.map(book => (
                <li>
                    <Book
                        key={book.id}
                        cover={book.cover}
                        name={book.name}
                        author={book.author}
                        username={book.username}
                    />
                </li>
            ))}
        </ul>
    );
};

export default Booklist;