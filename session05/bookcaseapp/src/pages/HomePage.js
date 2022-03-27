import BookList from '../components/BookList';

const HomePage = (props) => {
    const { books, addBook } = props;
    return (
        <>
            <h2>Suggested reading:</h2>
            <BookList books={books} addBook={addBook}></BookList>
            
        </>
    );
}

export default HomePage;