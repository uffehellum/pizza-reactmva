import { FetchProfile, ProfileStatusConfig } from './FetchProfile'

describe('FetchProfile', () => {

    it('config requires url', () => {
        const x = { profileStatusUrl: '' }
        const b: ProfileStatusConfig = x
        expect(b.profileStatusUrl).toEqual('')
    })
})