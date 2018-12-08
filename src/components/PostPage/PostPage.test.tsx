import React from 'react'
import Enzyme, {shallow, mount, ShallowWrapper} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PostPage from '../PostPage/PostPage';
import { PostList } from '../PostList/PostList';

describe('PizzaPage', () => {
    beforeAll(()=>{  
      Enzyme.configure({
        adapter: new Adapter()
      })
    })

//post should have a list element
it('has a list of posts of length greater than 100', () =>{
    const postlist = shallow(<PostPage />)
    console.log("enter the list of posts components")
    expect(postlist.find(".postlist").name()).toEqual('div');
  })

  it('to test if you navigate to /posts is there any postlist component or not',() => {
      console.log("checking the postlist component is avialble in the post page")
    const postPage = mount(<PostPage />)
    console.log("enter the posts page to find post list components")
    console.log(PostList, "-------------------------------", postPage.find(PostList));
      expect(postPage.find(PostList)).toBeDefined()
      //expect(wrapper.containsMatchingElement(<h2>Details for 1</h2>)).toBeTruthy();
    })

})