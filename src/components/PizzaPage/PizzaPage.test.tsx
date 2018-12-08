import React from 'react'
import ReactDOM from 'react-dom'
import PizzaPage from './PizzaPage'
import { BrowserRouter } from 'react-router-dom'
import Enzyme, {shallow, ShallowWrapper} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import InboxPane from '../InboxPane';
import { array } from 'prop-types';

describe('PizzaPage', () => {
  beforeAll(()=>{  
    Enzyme.configure({
      adapter: new Adapter()
    })
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><PizzaPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it ('has an App element', ()=>{
    const wrapper = shallow(<PizzaPage/>)
    expect(wrapper.find('.App').name()).toEqual('div')
  })

  it('has an store element', () =>{
    const storepane = shallow(<PizzaPage />)
    expect(storepane.find('#storepane').name()).toEqual('div')
  })

})
