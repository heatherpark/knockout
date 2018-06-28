import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import { renderedText } from '../utility/testing';
import Vote from './Vote';

Enzyme.configure({ adapter: new Adapter() });

describe('Vote', () => {
  const shallowRender = shallowRenderProps => 
    shallow(<Vote {...shallowRenderProps} />);

  it('renders a pair of buttons', () => {
    const props = { 
      hasVoted: '', 
      pair: ['Germany', 'Spain'],
      vote: jest.fn()
    };
    const buttons = shallowRender(props).find('button');

    expect(buttons.length).toBe(2);

    expect(renderedText(buttons.at(0))).toBe(props.pair[0]);
    expect(renderedText(buttons.at(1))).toBe(props.pair[1]);
  });

  it('invokes callback when a button is clicked', () => {
    const mockCallback = jest.fn();
    const props = { 
      hasVoted: '', 
      pair: ['Germany', 'Spain'],
      vote: mockCallback
    };
    
    const button = shallowRender(props).find('button').first();
    button.simulate('click');
    
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('disables buttons when user has voted', () => {
    const props = {
      hasVoted: 'Germany',
      pair: ['Germany', 'Spain'],
      vote: jest.fn()
    };

    const disabledButtons = shallowRender(props).find('[disabled=true]');
    expect(disabledButtons.length).toBe(2);
  });

  it('adds label to the voted entry', () => {
    const props = {
      hasVoted: 'Germany',
      pair: ['Germany', 'Spain'],
      vote: jest.fn()
    };

    const button = shallowRender(props).find('.label').first();
    expect(renderedText(button)).toBe('Voted');
  });
});