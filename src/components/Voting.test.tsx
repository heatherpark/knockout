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
    props = { 
      pair: ['Germany', 'Spain'],
      vote: () => {} 
    };
    const buttons = shallowRender(props).find('button');

    expect(buttons.length).toBe(2);
    expect(buttons.at(0).render().text()).toBe(props.pair[0]);
    expect(buttons.at(1).render().text()).toBe(props.pair[1]);
  });

  it('invokes callback when a button is clicked', () => {
    const mockCallback = jest.fn();
    props = { 
      pair: ['Germany', 'Spain'],
      vote: mockCallback 
    };
    
    const button = shallowRender(props).find('button').first();
    button.simulate('click');
    
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});