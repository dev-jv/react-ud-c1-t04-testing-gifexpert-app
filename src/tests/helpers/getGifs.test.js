import { getGifs } from '../../helpers/getGifs';

// eslint-disable-next-line no-unused-vars
import colors from 'colors';

// eslint-disable-next-line jest/valid-title
describe('Testing in getGifs - with Fetch'.bgBlue.white, () => {

    test('1: Should get back 10 elements', async() => {
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBe(20);
    });

    test('2: Should get back', async() => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    });

});
