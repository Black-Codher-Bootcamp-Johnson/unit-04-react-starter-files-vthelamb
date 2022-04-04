import React from "react";

const Book = (props) => {
  return (
    <div className="book">
      <img src={props.book.volumeInfo.imageLinks.thumbnail} />
      <h2>{props.book.volumeInfo.title}</h2>
      <h3>{props.book.volumeInfo.authors}</h3>
      <p>
        £{props.book.saleInfo.retailPrice
          ? props.book.saleInfo.retailPrice.amount
          : "No price defined"}
      </p>
      <p className='description'>{props.book.volumeInfo.description}</p>
        {props.removeBook ? (
        <button onClick={() => props.removeBook(props.book.id)} className="remove-button">Remove</button>
        ) : (
        <button onClick={() => props.addBook(props.book.id)} className="add-button">
          Add to Bookcase
        </button>
      )}
    </div>
  );
};
export default Book;
