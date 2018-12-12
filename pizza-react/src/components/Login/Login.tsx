import * as React from 'react';

export class Login extends React.Component<any>{
    constructor(props: any) {
        super(props)
        this.state = {
         username: '',
         password: ''
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
       }
      handleInputChange = (event: any) => {
        this.setState({
         [event.target.name]: event.target.value
        })
       }
      render() {
        return (
         <form className='login'>
           <label>Username</label>
           <input id='email' onChange={this.handleInputChange} name='email' type='text' />
           <label>Password</label>
           <input id='password' onChange={this.handleInputChange} name='password' type='password' />
           <button>Submit</button>
         </form>
        )
       }
      }