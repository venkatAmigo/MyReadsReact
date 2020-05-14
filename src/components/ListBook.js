import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from '../components/BookShelf'

function Shelves(props) {

    const currentlyReadingBooks = props.books.filter(book =>
        book.shelf === "currentlyReading")
    const wantToReadBooks = props.books.filter(book =>
        book.shelf === "wantToRead")
    const readBooks = props.books.filter(book =>
        book.shelf === "read")

    return (<div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <BookShelf category='currentlyReading' books={currentlyReadingBooks} changeShelves={props.searchForBooks} />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <BookShelf category='wantToRead' books={wantToReadBooks} changeShelves={props.searchForBooks} />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <BookShelf category='read' books={readBooks} changeShelves={props.searchForBooks} />
                </div>
            </div>
        </div>

        <Link to='/search' className="open-search-link">Add a book</Link>

    </div>)
}
export default Shelves;