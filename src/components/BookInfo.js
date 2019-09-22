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
}
    export default BookInfo;