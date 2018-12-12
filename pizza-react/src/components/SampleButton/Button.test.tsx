import * as React from 'react';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Button } from '../SampleButton/Button'
import { PostForm } from '../PostForm/PostForm'


describe('PostList without redux', () => {

    beforeAll(() => {
        Enzyme.configure({
            adapter: new Adapter()
        })
    })

    it(' when button is not clicked', () => {
        console.log("checking the button simulation funtionality through Jest")
        const mockCallBack = () => {};
        const button = shallow((<Button />));
        expect(button.find('button').text()).toEqual("XBox");

    });

    it(' when button is clicked', () => {
        const mockCallBack = () => {};
        const button = shallow((<Button />));
        button.find('button').simulate('click');
        console.log(button.find('button').text());
        expect(button.find('button').text()).toEqual("XBox 2.0");
    });


})