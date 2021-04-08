import React from 'react';
import {GifGridItem} from "../../components/GifGridItem";
import { shallow } from 'enzyme';
import '../../setupTests';

// eslint-disable-next-line no-unused-vars
import colors from 'colors';

// eslint-disable-next-line jest/valid-title
describe('Testing in <GifGridItem />'.bgBlue.white, () => {

    const title = 'Any title';
    const url = 'https://localhost/some.jpg';
    let wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

   test('1: Should show <GifGridItem /> correctly',() => {
       expect(wrapper).toMatchSnapshot();
   });

   test('2: Should have a paragraph with the title', () => {
       const p = wrapper.find('p');
       console.log(p.text());
       console.log(p.text().trim());
       expect(p.text().trim()).toBe(title);
   });

    test('3: Should have an image like in the url, alt in props', () => {
        const img = wrapper.find('img');
        // console.log(img.html());
        console.log(img.props().src);
        // expect(img.props().src).toBe(url);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('4: Should have an animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    });

});
