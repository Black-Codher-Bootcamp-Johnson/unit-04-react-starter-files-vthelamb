import BookList from '../components/BookList';

const BookcasePage = (props) => {
    const { bookcase, setBookcase } = props;
    return (
        <>
            <h2>This is your personal BookcasePage</h2>
            <p>If you want to remove a book from this list, click on the dismiss button.</p>
            <BookList books={bookcase} addBook={setBookcase}></BookList>
        </>
    );
}

export default BookcasePage; 