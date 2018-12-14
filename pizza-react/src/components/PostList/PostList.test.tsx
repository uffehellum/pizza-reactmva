import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Post } from '../../types'
import { PostList } from '../PostList/PostList';

describe('PostList without redux', () => {

  beforeAll(() => {
    Enzyme.configure({
      adapter: new Adapter()
    })
  })

  it('componentWillMount calls fetchposts', () => {
    let called = false
    const fetchPosts: () => void = () => { called = true }
    const posts: Post[] = [{ body: "post list body", id: 2, title: "post list element", userId: 1 }]
    const subject = new PostList({
      fetchPosts,
      posts,
      propFromParent: 7
    })

    subject.componentWillMount();
    console.log("render posts method", subject.renderPosts(posts));
    expect(called).toBe(true);
  })


})
