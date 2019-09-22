import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // get access to match,location and history.
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Books from "./components/Books";
import BookInfo from "./components/BookInfo";
import Orders from "./components/Orders";
import OrderInfo from "./components/OrderInfo";
import Wishlists from "./components/Wishlists";
import Cart from "./components/Cart";


const baseUrl = "https://www.googleapis.com/books/v1/volumes";


class App extends Component {

  constructor() {
    super();
    this.state = {
      books: [],
      currentUser: {},
      currentUsersWishlist: [],
      currentUsersOrders: [],
      currentUsersCartBooks: [],
      sortBy: "All"
    };
  }

  // componentDidMount() {
  //   this.fetchBooksFromSever().then(this.addVerifiedBooksToState());
  //   this.fetchUsersFromServer().then(this.addUserToState());
  // }
  fetchBooksFromSever = () => {
    return fetch(
      baseUrl +
      '?q=""&printType=books&orderBy=newest&startIndex=1&maxResults=40&langRestrict=en'
    ).then(resp => resp.json());
  };


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
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
              path="/books/:id"
              exact
              render={props => (
                <BookInfo
                  {...props}
                  usersCart={this.state.currentUsersCartBooks}
                  updateInformation={this.updateStateInformation}
                  usersWishlist={this.state.currentUsersWishlist}
                  currentUser={this.state.currentUser}
                />
              )}
            />
            <Route
              path="/orders"
              exact
              render={() => (
                <Orders
                  user={this.state.currentUser}
                  orders={this.state.currentUsersOrders}
                />
              )}
            />
            <Route path="/orders/:id" exact component={OrderInfo} />
            <Route
              path="/cart"
              exact
              render={() => (
                <Cart
                  updateCart={this.updateStateInformation}
                  user={this.state.currentUser}
                  cartBooks={this.state.currentUsersCartBooks}
                />
              )}
            />
            <Route
              path="/wishlists"
              exact
              render={() => (
                <Wishlists
                  updateWishlist={this.updateStateInformation}
                  user={this.state.currentUser}
                  wishlist={this.state.currentUsersWishlist}
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