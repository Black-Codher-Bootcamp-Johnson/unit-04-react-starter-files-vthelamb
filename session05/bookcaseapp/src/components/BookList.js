import React from 'react';
import Book from './Book';

const BookList = (props) => {
    const {books, addBook}=props  
    return books.map((book) => {
        return <Book book={book} addBook={addBook}/>;
      });
}   

export default BookList; 