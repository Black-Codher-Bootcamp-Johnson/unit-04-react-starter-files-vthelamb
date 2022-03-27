import BookList from '../components/BookList';

const BookcasePage = (props) => {
    const { bookcase, removeBook } = props;
    return (
        <>
            <h2>This is your personal BookcasePage</h2>
            <p>If you want to remove a book from this list, click on the remove button.</p>
            <BookList books={bookcase} removeBook={removeBook}></BookList>
        </>
    );
}

export default BookcasePage; 