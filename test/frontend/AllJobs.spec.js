import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AllJobs from '../src/components/AllJobs';

describe('AllJobs component', () => {
  const wrapper = shallow(<AllJobs jobs={['job1', 'job2']} />);

  it('contains 2 JobItem components', () => {
    expect(wrapper.find('JobItem').length.to.equal(2));
  });

  it('contains a button to start and stop the job wait time', () => {
    expect(wrapper.find('StopTimer').length.to.equal(2));
  });
});
