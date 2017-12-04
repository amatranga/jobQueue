import React from 'react';
import { describe } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import JobQueue from '../../client/src/components/JobQueue';
import AddJob from '../../client/src/components/AddJob';

describe('JobQueue Component', () => {
  const wrapper = shallow(<JobQueue />);

  it('should render one <AddJob> component', () => {
    expect(wrapper.find(<AddJob />).length.to.equal(1));
  });

  it('should contain a button to start/stop the queue', () => {
    expect(wrapper.find(<button className="pause button" onClick={this.pause}>Pause Queue</button>).length.to.equal(1));
  });
});
