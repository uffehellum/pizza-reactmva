import { PostList } from './PostList'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Post } from '../../types'

describe('PostList without redux', () => {

  beforeAll(() => {
    Enzyme.configure({
      adapter: new Adapter()
    })
  })

  it('componentWillMount calls fetchposts', () => {
    let called = false
    const fetchPosts: () => void = () => { called = true }
    const posts: Post[] = []
    const subject = new PostList({
      fetchPosts,
      posts,
      propFromParent: 7
    })
    subject.componentWillMount()
    expect(called).toBe(true)
  })

})
