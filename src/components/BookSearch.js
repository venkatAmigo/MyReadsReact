import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookShelf from '../components/BookShelf';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            books: []
        }
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
    }
    clearQuery = () => {
        this.updateQuery('')
    }
    componentDidUpdate() {
        if (this.setState.query !== '') {
            BooksAPI.search(this.state.query)
                .then((data) => {
                    console.log(data)
                    if (data !== undefined) {
                        if (Array.isArray(data)) {
                            this.setState(() => ({
                                books: data.filter(book => book.hasOwnProperty('imageLinks'))
                                    .filter(book => book.hasOwnProperty('authors'))
                            }))
                        } else {
                            this.setState(() => ({
                                query: '',
                                books: []
                            }))
                        }
                    } else {
                        this.setState(() => ({
                            books: []
                        }))
                    }
                })
        }
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelf category='none' books={this.state.books} changeShelves={this.props.searchForBooks} />
                </div>
            </div>
        )
    }
}

export default Search;