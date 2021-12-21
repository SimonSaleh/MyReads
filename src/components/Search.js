import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    query: "",
    searchResult: [],
  };

  updateQuery = function(query) {
    this.setState({ query: query });
    this.updateSearchResult(query);
  };
  updateSearchResult = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchResult) => {
        if (searchResult.error) {
          this.setState({ searchResult: [] });
        } else {
          this.setState({ searchResult: searchResult });
        }
      });
    } else {
      this.setState({ searchResult: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResult.map((foundBook) => {
              let shelf = "none";
              this.props.books.map((book) =>
                book.id === foundBook.id ? (shelf = book.shelf) : ""
              );
              return (
                <li key={foundBook.id}>
                  <Book
                    currentShelf={shelf}
                    book={foundBook}
                    changeBookShelf={this.props.changeBookShelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
