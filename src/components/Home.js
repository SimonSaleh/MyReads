import React, { Component } from "react";
import BookShelf from "./BookShelf.js";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfName="currentlyReading"
              books={this.props.books}
              shelfTitle="Currently Reading"
              changeBookShelf={this.props.changeBookShelf}
            />
            <BookShelf
              shelfName="wantToRead"
              books={this.props.books}
              shelfTitle="Want to Read"
              changeBookShelf={this.props.changeBookShelf}
            />
            <BookShelf
              shelfName="read"
              books={this.props.books}
              shelfTitle="Read"
              changeBookShelf={this.props.changeBookShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;
