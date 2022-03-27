import React from 'react';
import Book from './Book';

const BookList = (props) => {
    const {books, addBook, removeBook}=props  
    return books.map((book) => {
     return (removeBook?<Book book={book} removeBook={removeBook}/>: <Book book={book} addBook={addBook}/>)
       // return <Book book={book} addBook={addBook}/>;
      });
}   

export default BookList; 