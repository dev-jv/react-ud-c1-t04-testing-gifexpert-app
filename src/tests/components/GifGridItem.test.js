import React from 'react';
import {GifGridItem} from "../../components/GifGridItem";
import { shallow } from 'enzyme';
import '../../setupTests';
import colors from 'colors';

describe('/> Testing in <GifGridItem/>'.bgBlue.white, () => {

   test('Test 1: Should show <GifGridItem /> correctly ',() => {
       let wrapper = shallow(<GifGridItem />);
       expect(wrapper).toMatchSnapshot();
   });
});
