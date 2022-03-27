import React from 'react';

const Book = (props) => {
  return (
    <div>
      <img src={props.book.volumeInfo.imageLinks.thumbnail}/>
    <h2>{props.book.volumeInfo.title}</h2>
    <h3>{props.book.volumeInfo.authors}</h3>
    <p>{props.book.saleInfo.retailPrice ? props.book.saleInfo.retailPrice.amount : 'No price defined'}</p>
    <p>{props.book.volumeInfo.subtitle}</p>
    <p>{props.book.volumeInfo.description}</p>
    <button onClick={() => props.addBook(props.book.id)}>Add to Bookcase</button>
    <button onClick={() => props.removeBook(props.book.id)}>x</button>
    </div>
  )
}
export default Book;

