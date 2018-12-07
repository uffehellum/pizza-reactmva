import React from 'react'
import ReactDOM from 'react-dom'
import PizzaPage from './PizzaPage'
import { BrowserRouter } from 'react-router-dom'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

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

})
