import React from 'react';
// import { useState } from 'react';

import book1 from '../../images/BAR_seda.jpg';
import book2 from '../../images/Mur_kafka.jpg';
import searchIcon from '../../images/search-icon.svg';

import Button from '../UI/Button';
import Card from '../UI/Card';
import Booklist from './Booklist';


import classes from './Bookboard.module.css';

const DUMMY_BOOKS = [
    {
        id: Math.random(),
        cover: book1,
        name: 'Seda',
        author: 'Alessandro Baricco',
        username: 'pepito1'
    },
    {
        id: Math.random(),
        cover: book2,
        name: 'Kafka en la orilla',
        author: 'Haruki Murakami',
        username: 'diego123'
    },
    {
        id: Math.random(),
        cover: book1,
        name: 'Seda',
        author: 'Alessandro Baricco',
        username: 'pepito1'
    },
    {
        id: Math.random(),
        cover: book2,
        name: 'Kafka en la orilla',
        author: 'Haruki Murakami',
        username: 'diego123'
    },
    {
        id: Math.random(),
        cover: book1,
        name: 'Seda',
        author: 'Alessandro Baricco',
        username: 'pepito1'
    },
    {
        id: Math.random(),
        cover: book2,
        name: 'Kafka en la orilla',
        author: 'Haruki Murakami',
        username: 'diego123'
    },
]

const Bookboard = (props) => {
    // const [dummyBooks, setDummyBooks] = useState(DUMMY_BOOKS);

    // const bookListHandler = () => {
    //     return 0;
    // };

    return (
        <div className={classes.bookboard}>
            <div className={classes.actions}>
                <Button>Add book</Button>
                <form className={classes.searchbar}>
                    <img type='submit' src={searchIcon} alt="icon-search" />
                    <input type="text" name="searchBar" id="searchBar" placeholder='Search...' />
                </form>
            </div>
            <Card className={classes.bb_card}>
                <Booklist list={DUMMY_BOOKS} />
            </Card>

        </div>
    );
};

export default Bookboard;