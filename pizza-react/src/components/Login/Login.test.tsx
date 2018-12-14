import * as React from 'react';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { Login } from '../Login/Login';

import { getMaxListeners } from 'cluster';

describe('Login Component', () => {
    beforeAll(() => {
        Enzyme.configure({
            adapter: new Adapter()
        })
    })

    it('should render without throwing an error', () => {
    expect(shallow(<Login />).find('form.login').exists()).toBe(true);
    })

    it('render a email input element', () => {
        expect(shallow(<Login />).find('#email').length).toEqual(1);
    })

    it('should respond to the onChange event on email and change the state',() => {
        const emailWrapper = shallow(<Login username={"gn@getMaxListeners.com"} password="12345"/>);
        emailWrapper.find('#email').simulate('change',{target: {
            name: 'email', value: 'mock@gmail.com'
        }});
        console.log(emailWrapper.state('email'))
        expect(emailWrapper.state('email')).toEqual('mock@gmail.com');
    })
    
    it('should simulate the OnChange event on password and chnage the state',() => {
        const passwordWrapper = shallow(<Login />);
        passwordWrapper.find('#password').simulate('change',{target: {
            name: 'password', value: 'kites123'
        }});
        expect(passwordWrapper.state('password')).toEqual('kites123');
    })
})