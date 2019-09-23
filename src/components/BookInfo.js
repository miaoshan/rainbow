import React, {Component} from "react";
import {Link} from "react-router-dom";
const baseUrl = "https://www.googleapis.com/books/v1/volumes";

class BookInfo extends Component {
    state = {
        book: [],
        image: {},
        genre: [],
        price: {}

    }
    componentDidMount() {
        return fetch(baseUrl + `/${this.props.match.params.id}`)
            .then(resp => resp.json())
            .then(data => {
                if (
                    data.volumeInfo &&
                    data.volumeInfo.imageLinks.thumbnail &&
                    data.volumeInfo.categories &&
                    data.saleInfo.listPrice
                ) {
                    this.setState({
                        book: data.volumeInfo,
                        image: data.volumeInfo.imageLinks.thumbnail,
                        genre: data.volumeInfo.categories[0],
                        price: data.saleInfo.listPrice
                    });
                }
            });
    }


    render() {
        return (
          <div className="container">
            <h1 className="bookTitle">{this.state.book.title}</h1>
            <img
              className="bookImage"
              src={this.state.image}
              alt={this.state.book.title}
            />
            <h2 className="bookAuthor">{this.state.book.authors}</h2>
            <p className="bookPriceLink">£{this.state.price.amount}</p>
            <h3 className="bookPublisher">
              Publisher: {this.state.book.publisher}
            </h3>
            <h4 className="bookPublishedDate">
              Published: {this.state.book.publishedDate}
            </h4>
            <h6 className="bookPageCount">
              Page Count: {this.state.book.pageCount}
            </h6>
            <h6 className="bookGenre"> Genres: {this.state.genre}</h6>
            <p
              className="bookDescription"
              dangerouslySetInnerHTML={{ __html: this.state.book.description }}
            />
            {/* <div>
              {this.renderWishButton()}
              {this.renderCartButton()}
            </div> */}
          </div>
        );
      }
}
    export default BookInfo;