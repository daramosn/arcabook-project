import React from 'react';

import classes from './Book.module.css';

const Book = (props) => {
    return (
        <div className={classes.book}>
            <img src={props.cover} alt={`cover_${props.name}`} />

            <h2>{props.name}</h2>
            <h3>{props.author}</h3>

            <span>{props.username}</span>
        </div>
    );
};

export default Book;