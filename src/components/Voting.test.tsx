import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Voting, { IProps } from './Voting';

Enzyme.configure({ adapter: new Adapter() })

describe('Voting', () => {
  let props: IProps | undefined;

  const shallowRender = props => 
    shallow(<Voting {...props} />);

  afterEach(() => {
    props = undefined;
  });

  it('renders a pair of buttons', () => {
    props = { pair: ['Germany', 'Spain'] };
    expect(shallowRender(props).find('button').length).toBe(2);
  });
});