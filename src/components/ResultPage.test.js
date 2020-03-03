import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ResultPage from './ResultPage';
import Word from './Word';

configure({ adapter: new Adapter() });

describe('<ResultPage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ResultPage />);
    });

    it('should render ResultPage without crashing', () => {
        shallow(<ResultPage />);
    });

    it('should render 3 Word elements if 3 words are passed', () => {
        wrapper.setProps({ words: ['a', 'b', 'c'] });
        expect(wrapper.find(Word)).toHaveLength(3);
    });
});