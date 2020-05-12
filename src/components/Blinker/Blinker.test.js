import React from 'react';
import { shallow } from 'enzyme';
import { Blinker } from './Blinker';

describe('Blinker', () => {
  it('should render null when  is not supposed to render', () => {
    const wrapper = shallow(<Blinker shouldShowComponentVar={false} />);
    expect(wrapper.type()).toEqual(null);
  });

  it('when it successfully renders it renders an element with the appropriate class-name', () => {
    const wrapper = shallow(<Blinker shouldShowComponentVar={true} />);
    expect(wrapper.find('.class-name').length).toEqual(1);
  });
});
