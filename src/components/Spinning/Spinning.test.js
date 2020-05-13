import React from 'react';
import { shallow } from 'enzyme';
import { Spinning } from './Spinning';

describe('Spinning', () => {
  it('renders the spinner', () => {
    const wrapper = shallow(<Spinning />);
    expect(wrapper.find('.spinning').length).toEqual(1);
  });

  it('renders the inline spinner', () => {
    const wrapper = shallow(<Spinning inline={true} />);
    expect(wrapper.find('.inline').length).toEqual(1);
  });
});
