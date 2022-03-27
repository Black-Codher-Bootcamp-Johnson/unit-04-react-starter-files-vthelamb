import React, { useState } from "react";
import bookList from "./models/books.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import BookcasePage from "./pages/BookcasePage";
import HomePage from "./pages/HomePage";
import Search from "./components/Search";
import BookList from "./components/BookList";

function App() {
  const [books, setBook] = useState(bookList);
  const [keyword, setKeyword] = useState("");
  const [bookcase,setBookcase] = useState([]);

  async function findBooks(keyword) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebooks&print-type=books&projection=lite`;
    const results = await fetch(url).then((res) => res.json());

    if (!results.error) {
      setBook(results.items);
    }
    else {
      console.log("API error",results.error);
    }

    return results;
  }

  function addBook(id) {
    const bookTheUserWantToAdd = books.find((book) => book.id === id);
    console.log(bookTheUserWantToAdd)
    if (bookTheUserWantToAdd) {
      setBookcase([...bookcase,bookTheUserWantToAdd]);
      setBook(books.filter(book => book.volumeInfo.title !== bookTheUserWantToAdd.volumeInfo.title))
    }
    else {
      console.log(`This book was not found`);
    }
    console.log(bookcase)
  }

  function removeBook(id){
    const bookTheUserWantToRemove = bookcase.find((book) => book.id === id);
    if (bookTheUserWantToRemove) {
      setBookcase(books.filter(book => book.volumeInfo.title !== bookTheUserWantToRemove.volumeInfo.title))
      setBook([...bookcase,bookTheUserWantToRemove])
    }
    else {
      console.log(`No books found`);
    }
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Search
                findBooks={findBooks}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <HomePage books={books} addBook={addBook}></HomePage>
            </>
          }
        />
        <Route
          path="/bookcase"
          element={
            <>
              <Search
                keyword={keyword}
                setKeyword={setKeyword}
                findBooks={findBooks}
              />
              <BookcasePage bookcase={bookcase} removeBook={removeBook}></BookcasePage>
            </>
          }
        />
        <Route
          path="/About"
          element={
            // <>
            <About />
            //</>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
