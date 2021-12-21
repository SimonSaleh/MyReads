import React, { Component } from "react";
import Book from "./Book.js";
class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
              .filter((book) => book.shelf === this.props.shelfName)
              .map((book) => (
                <li key={book.id}>
                  <Book
                    currentShelf={book.shelf}
                    book={book}
                    changeBookShelf={this.props.changeBookShelf}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;
