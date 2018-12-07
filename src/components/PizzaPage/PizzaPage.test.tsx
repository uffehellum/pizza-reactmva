import React from 'react'
import ReactDOM from 'react-dom'
import PizzaPage from './PizzaPage'
import { BrowserRouter } from 'react-router-dom'

describe('PizzaPage', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><PizzaPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
