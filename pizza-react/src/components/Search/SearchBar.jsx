import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'

const { API_KEY } = process.env
const API_URL = ''

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    console.log("enterd searchbar")
    axios.get('https://www.microsoft.com/services/api/v3/suggest?market=en-us&clientId=7F27B536-CF6B-4C65-8638-A0F8CBDFCA65&sources=Microsoft-Terms%2CIris-Products%2CDCatAll-Products&filter=%2BClientType%3AStoreWeb&counts=5%2C1%2C5&query=sd')
    
      .then(({ data }) => {
        console.log("drata", data.ResultSets)
        this.setState({
          results: data.ResultSets
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search
