import React from 'react';
import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';

// eslint-disable-next-line no-unused-vars
import colors from 'colors';

// eslint-disable-next-line jest/valid-title
describe('Testing in <AddCategory />'.bgBlue.white, () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories = {setCategories} />);

    test('1: Should show correctly the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('1: Should change the text box', () => {
        const input = wrapper.find('input');
        const value = 'new value';
        input.simulate('change', {target: { value }});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

});
