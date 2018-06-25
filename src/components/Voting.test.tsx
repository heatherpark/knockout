import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Voting from './Voting';

Enzyme.configure({ adapter: new Adapter() })

describe('Voting', () => {
  const shallowRender = props => 
    shallow(<Voting {...props} />);

  it('renders a pair of buttons', () => {
    let props = { pair: ['Germany', 'Spain'] };
    expect(shallowRender(props).find('button').length).toBe(2);
  });
});