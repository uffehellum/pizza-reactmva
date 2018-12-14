import * as React from 'react';
import axios from 'axios';

export default class Search extends React.Component{
  
    constructor(props: any)
    {
        super(props)
        this.state={
           searchTerm: 'xbox one',
           results: []
        }
    }
    getInfo = () => {
        console.log("entered the search component");
        const [COMMAND] = 'search'
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => console.log(res.json()))
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //   .then(({ data }) => {
        //       console.log("the data is ", res.json);
        //     this.setState({
        //       results: data.data
        //     })
        //   })
      }

    render(){
        return (
            <div>
             <button onClick={this.getInfo}>Search</button>
            </div>
        );
    }
}