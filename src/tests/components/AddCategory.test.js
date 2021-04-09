import React from 'react';
import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

// eslint-disable-next-line no-unused-vars
import colors from 'colors';

// eslint-disable-next-line jest/valid-title
describe('Testing in <AddCategory />'.bgBlue.white, () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories} />);
    });

    test('1: Should show correctly the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('2: Should change the text box', () => {
        const input = wrapper.find('input');
        const value = 'new value';
        input.simulate('change', {target: { value }}); // Pass an object (target) < e:undefined
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('3: Should not post the information with submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} }); // Pass a method < e.preventDefault is not a function
        expect(setCategories).not.toHaveBeenCalled();
    });

});
