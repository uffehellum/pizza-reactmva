import * as React from 'react';

export default class SampleSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchTerm:'',
            resultSet: []
        }
    }
    handleInputChange = (e) => {
        this.setState({
          searchTerm: e.target.value
      })
    }
    hnadleSubmit = () => {
        console.log("enetered")
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => 
            this.setState({resultSet: res.json()})
            )
       this.state.resultSet.map((result => <li key={result.id}> 
       <p>{result.title}</p>
       </li>))
         
    }
    
    render(){
        return( 
            <div>
            <form onSubmit={this.hnadleSubmit}> 
            <input
            placeholder="Search for..."
            onChange={this.handleInputChange}  />
             <p>{this.state.searchTerm}</p>
             </form>   
            </div>
            
           
        );
    }
}