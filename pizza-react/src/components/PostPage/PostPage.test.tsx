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
it('has a postlist component', () =>{
    const postlist = shallow(<PostPage />)
    expect(postlist.find(".postlist").name()).toEqual('div');
  })
})
