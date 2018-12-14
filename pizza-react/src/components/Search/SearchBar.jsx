import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'
//import Suggestions2 from './Suggestions2'
import './SearchBar.css'
import { connect } from 'react-redux';
import { fetchSuggestions, fetchSearch } from '../../redux/actions/searchActions';
import { PropTypes } from 'prop-types';
const { API_KEY } = process.env
const API_URL = ''

class Search extends Component {
  state = {
    query: '',
    //suggestions: [],
    //searchArticles: [],
    // searchHeader: ''
  }
  handleInputChange(e) {
    //console.log("the netx val:", e.target.value)
    this.setState({
      query: this.search.value
    }, () => {
      console.log("the query string is ", this.state.query)
      this.props.fetchSuggestions(this.state.query)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.fetchSearch} id="searchBar">
          <div className="searchmodule">
            <input id="sbar"
              placeholder="Search for..."
              autoComplete={"off"}
              ref={input => this.search = input}
              onChange={this.handleInputChange.bind(this)}
            />
            <button type="submit">Submit</button>

            {this.props.suggestions && this.props.suggestions.length > 0 &&
              <div class="suggestionsList">
                {/* <Suggestions suggestions={this.props.suggestions} /> */}
                <Suggestions suggestions={this.props.suggestions} />
              </div>}
          </div>

        </form>
        <h1>{this.props.searchHeader}</h1>
        {this.props.searchArticles &&
          this.props.searchArticles.map((searcArticle, index) =>
            <div>
              <h2>{searcArticle.title_en_us}</h2>
              <br />
              <br />
              <span>{searcArticle.content_en_us}</span>
              <hr width="100%"></hr>
            </div>
          )
        }
      </div>
    )
  }
}

Search.propTypes = {
  fetchSuggestions: PropTypes.func.isRequired,
  fetchSearch: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  searchArticles: PropTypes.array.isRequired,
  searchHeader: PropTypes.string

}

const mapStateToProps = state => ({
  suggestions: state.search.suggestions,
  searchArticles: state.search.searchArticles,
  searchHeader: state.search.searchHeader
})

const mapDispatchToProps = {
  fetchSuggestions,
  fetchSearch
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
//export default Search
