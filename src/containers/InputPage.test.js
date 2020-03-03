import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputPage from './InputPage';
import Word from './../components/Word';

configure({ adapter: new Adapter() });

describe('<InputPage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<InputPage />);
    });

    it('should render InputPage without crashing', () => {
        shallow(<InputPage />);
    });

    it('should render page elements', () => {
        expect(wrapper.find('h4')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(2);
    });

    it('should clear words and input value after clicking "Clear" button', () => {
        wrapper.find('#clearBtn').simulate('click');
        expect(wrapper.state('inputValue')).toEqual('');
        expect(wrapper.find(Word)).toHaveLength(0);
    });
});