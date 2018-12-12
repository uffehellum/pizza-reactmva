import * as React from 'react';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import SamplePostForm from '../SamplePosts/SamplePostForm';

describe('PostList without redux', () => {

    beforeAll(() => {
        Enzyme.configure({
            adapter: new Adapter()
        })
    })
    it('testing the postform submit button', () => {
        const samplePost = shallow(<SamplePostForm title={"hi"} body={"hello"} submitText={"ssshn"} />)
        console.log("submit value", samplePost.find('.titleField').get(0).props.value);
        expect(samplePost.find('.bodyField').get(0).props.value).toEqual("hello");
    })
    it("testing button change value", () => {
        const samplePost = shallow(<SamplePostForm title={"hi"} body={"hello"} submitText={"ssshn"} />)
        samplePost.find('button').simulate('submit')
        expect(samplePost.find('button').text()).toEqual("hi");
    })
    it("Checking posts count", () => {
        const samplePost = shallow(<SamplePostForm title={"hi"} body={"hello"} submitText={"ssshn"} />)
        samplePost.find('button').simulate('submit');
        expect(samplePost.find('li')).toHaveLength(1);
    })
})