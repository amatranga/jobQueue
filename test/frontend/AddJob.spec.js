import React from 'react';
import { describe } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AddJob from '../../client/src/components/AddJob';

describe('AddJob component', () => {
  const wrapper = shallow(<AddJob canAddJob={true}/>);
  const wrapperPaused = shallow(<AddJob canAddJob={false} />);

  it('should render one <AddJob> component', () => {
    expect(wrapper.find('AddJob').length.to.equal(1));
  });

  it('should render an active button if the queue is running', () => {
    expect(wrapper.find(<button className="submit button" type="submit">Submit</button>).length.to.equal(1));
  });

  it('should render a disabled button if the queue is paused', () => {
    expect(wrapperPaused.find(
      <button className="submit button disabled" data-tooltip="Unpause the queue with the Pause button to add a job" disabled="true">Submit</button>
    ).length.to.equal(1));
  });
});
