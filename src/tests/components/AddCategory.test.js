import React from 'react';
import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';

// eslint-disable-next-line no-unused-vars
import colors from 'colors';

// eslint-disable-next-line jest/valid-title
describe('Testing in <AddCategory />'.bgBlue.white, () => {

    const setCategories = () => {};

    test('1: Should show correctly the component', () => {
        const wrapper = shallow(<AddCategory setCategories = {setCategories} />);
        expect(wrapper).toMatchSnapshot();
    });

});
