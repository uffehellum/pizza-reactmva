import React from 'react'
import Stores from './stores'
import Enzyme, { shallow, } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

describe('stores', () => {
    let wrapper: Enzyme.ShallowWrapper

    beforeAll(()=>{
        Enzyme.configure({ adapter: new Adapter() })
        wrapper = shallow(<Stores />)
    })

    it('header matches', () => {
        expect(wrapper.find('h1').text()).toEqual('Sample Store Pane')

    })

    it('includes storepane', () =>{
        const storepane = wrapper.find('StorePane')
        expect(storepane.name()).toEqual('StorePane')
        // expect(storepane).toHaveProperty('stores')
    })

        //expect(wrapper).toMatchInlineSnapshot(<div></div>)
})