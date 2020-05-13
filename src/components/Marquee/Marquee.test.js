import React from 'react';
import { shallow } from 'enzyme';
import { Marquee } from './Marquee';

describe('Marquee', () => {
  it('renders the marquee', () => {
    const wrapper = shallow(<Marquee />);
    expect(wrapper.find('.marquee').length).toEqual(1);
  });
});
