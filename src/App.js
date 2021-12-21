import React from "react";
import Search from "./components/Search";
import Home from "./components/Home";
import * as BooksAPI from "./BooksAPI";
import { Routes, Route } from "react-router-dom";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }

  changeBookShelf = (book, bookShelf) => {
    BooksAPI.update(book, bookShelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  };

  render() {
    return (
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                books={this.state.books}
                changeBookShelf={this.changeBookShelf}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                books={this.state.books}
                changeBookShelf={this.changeBookShelf}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
