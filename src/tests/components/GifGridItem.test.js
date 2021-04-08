import React from 'react';
import {GifGridItem} from "../../components/GifGridItem";
import { shallow } from 'enzyme';
import '../../setupTests';
import colors from 'colors';

describe('/> Testing in <GifGridItem/>'.bgBlue.white, () => {

    const title = 'Any title';
    const url = 'https://localhost/some.jpg';

   test('Test 1: Should show <GifGridItem /> correctly ',() => {

       let wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
       expect(wrapper).toMatchSnapshot();
   });

});
