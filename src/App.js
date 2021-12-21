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

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  changeBookShelf = async (book, bookShelf) => {
    await BooksAPI.update(book, bookShelf);
    const books = await BooksAPI.getAll();
    this.setState({ books });
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
