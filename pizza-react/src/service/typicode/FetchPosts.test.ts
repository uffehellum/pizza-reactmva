import typicode from '.'

describe('typicode fetch posts', () => {
    it('returns 100 posts', (done) => {
        try {
            typicode.FetchPosts()
            .then(result =>{
                expect(result.length >= 100).toEqual(true)
                done()
            })
        } catch (ex) {
            done(ex)
        }
    })
})
