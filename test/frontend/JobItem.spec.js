import React from 'React';
import { expect } from 'chail';
import { shallow } from 'enzyme';
import JobItem from '../src/components/JobItem';

describe('JobItem component', () => {
  const sampleJob = {
    name: 'job1',
    submittedAt: '2017-11-28T02:00:00.000Z',
    waitTime: '12345ms',
    jobNumber: '1',
    _endTime: '2017-11-28T02:00:12.345Z'
  };
  const wrapper = shallow(<JobItem job={sampleJob} />);

  it('should contain a name element', () => {
    expect(wrapper.find('name').length.to.equal(1));
  });

  it('should contain a submittedAt element', () => {
    expect(wrapper.find('submittedAt').length.to.equal(1));
  });

  it('should contain a waitTime element', () => {
    expect(wrapper.find('waitTime').length.to.equal(1));
  });

  it ('should contain a jobNumber element', () => {
    expect(wrapper.find('jobNumber').length.to.equal(1));
  });

  it('should contain a button to cancel the job', () => {
    expect(wrapper.contains(<button className='cancelJob'>Cancel Job</button>).to.equal(true));
  });
});
