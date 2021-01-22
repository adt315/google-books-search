import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Search from "./pages/SearchPage";
import Saved from "./pages/Saved";
import axios from "axios";
import Book from "./components/Book";


class App extends Component {
  state = {
    books:[],
    filteredBooks:[{}],
  }

  handleSearchChange = event => {
    console.log(event.target.value)
    var filter = event.target.value
    var filteredList = this.state.books.filter(item => {
      var values = Object.values(item).join("").toLowerCase()
      return values.indexOf(filter.toLowerCase()) !== -1
    })
    this.setState({
      filteredBooks: filteredList
    })
  }

  componentDidMount(){
    axios.get("https://www.googleapis.com/books/v1/volumes").then(response => {
      console.log(response);
      this.setState({
        books: response.data.results
      })

    })
  }

  render(){
    console.log(this.state)
    return (
      <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/about" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Search handleSearchChange={this.handleSearchChange}/>
        </Wrapper>
      </div>
    </Router>
    );
    }
  }
    

    export default App;