import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AddJob from '../src/components/AddJob';

describe('AddJob component', () => {
  const wrapper = shallow(<AddJob />);

  it('should render one <AddJob> component', () => {
    expect(wrapper.find('AddJob').length.to.equal(1));
  });
});
