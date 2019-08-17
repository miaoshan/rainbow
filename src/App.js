import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom"; // get access to match,location and history.
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Books from "./components/Books";




// const baseUrl = "https://www.googleapis.com/books/v1/volumes";


class App extends Component {

  constructor() {
    super();
    this.state = {
      books: []
    };
  }
  render() {
    return (
      <Router>
        <div className="App" >
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={(routerProps) => <Login {...routerProps} fetchUsers={this.fetchUsers} setUser={this.setUser} />} />
            <Route
              path="/login"
              exact
              render={() => (
                <Login fetchUsers={this.fetchUsers} setUser={this.setUser} />
              )}
            />

            <Route
              path="/books"
              exact
              render={props => (
                <Books
                  {...props}
                  books={this.getSortedBooks()}
                  getFilteredBooksFromServer={this.getFilteredBooksFromServer}
                  resetBooks={this.resetBooks}
                  setSortBy={this.setSortBy}
                />
              )}
            />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
