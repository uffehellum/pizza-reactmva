import React from 'react'
import ReactDOM from 'react-dom'
import PizzaPage from './PizzaPage'
import { BrowserRouter } from 'react-router-dom'
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import InboxPane from '../InboxPane';
import { array } from 'prop-types';

describe('PizzaPage', () => {
  beforeAll(() => {
    Enzyme.configure({
      adapter: new Adapter()
    })
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><PizzaPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has an App element', () => {
    console.log("testing the App element on home page")
    const wrapper = shallow(<PizzaPage />)
    expect(wrapper.find('.App').name()).toEqual('div')
  })

  it('testing the pizza page component has store component or not', () => {
    console.log("testing the Pizza component for inbox component")
    const pizzaPage = shallow(<PizzaPage />)
    //console.log(pizzaPage.dive().debug())
    expect(pizzaPage.find('#storepane').name()).toEqual('div')
  })

  it('testing the pizza page component has inbox component or not', () => {
    const pizzaPage = shallow(<PizzaPage />)
    console.log("testing the pizza component for inbox component")
    expect(pizzaPage.find('#inbox').name()).toEqual('div');
  })

})
