import Enzyme, { shallow } from 'enzyme'
import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
//import {PostForm} from '../PostForm/PostForm'
import { PostForm } from './PostForm'
import renderer from 'react-test-renderer';

describe('PostForm without redux', () => {

  beforeAll(() => {
    Enzyme.configure({
      adapter: new Adapter()
    })
  })
  test('testing the component rendered correctly or not', () => {
    const tree = renderer.create(
      <PostForm title="xbox" body="support" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('testsing the postform does it contains Add Post as the header or not', () => {
    const wrapper = shallow(<PostForm title="xbox" body="support" />);
    //console.log("*****************************************")
    console.log(wrapper.find('h1').text());
    expect(wrapper.find('h1').text()).toEqual("Add Post");
  });

  test('testing the postform has Add Post element or not', () => {
    const title = "new post title"
    const body = "new post body"
    const postForm = new PostForm({ title, body });

  });
  it('simulates a button click or not', () => {
    const title = "new post title"
    const body = "new post body"
    const post = {
      title: "new post title",
      body: "new post body"
    }

    const postForm = new PostForm({ title, body });
    postForm.onConsole();
    expect(postForm.state.title).toEqual("new post title");
  });

  it('testing the button simulations with jest and enzyme', () => {
    const title = "new post title"
    const body = "new post body"
    const wrapper = shallow(<PostForm title={title} body={body} submitText={"submit"} />);
    wrapper.find('.postformSubmitButton').simulate('click');
    //console.log(wrapper.state('submitText'));
    const val2 = wrapper.state('submitText')
    expect(val2).toEqual("back");
  })


})
// it('testing the postform on wrapper instance', () => {
//   const wrapper = shallow(<PostForm />);
//   const instance = wrapper.instance();
//   console.log(instance) ;
//   instance.onChange();
//   //wrapper.state.title;

// })
// console.log("the value here at postform is ", postForm.state.title);
    // postForm.onChange({ target: { name: "title", value: "xbox mock" }});
    // console.log("the value here at postform is ", postForm.state.title);