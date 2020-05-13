import React from 'react';
import { shallow } from 'enzyme';
import { Blinker } from './Blinker';

describe('Blinker', () => {
  it('when it successfully renders it renders an element with the appropriate class-name', () => {
    const wrapper = shallow(<Blinker />);
    expect(wrapper.find('.blinker').length).toEqual(1);
  });
});
