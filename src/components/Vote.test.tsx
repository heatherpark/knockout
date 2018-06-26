import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Vote, { IProps } from './Vote';

Enzyme.configure({ adapter: new Adapter() });

describe('Vote', () => {
  let props: IProps | undefined;

  const shallowRender = shallowRenderProps => 
    shallow(<Vote {...shallowRenderProps} />);

  afterEach(() => {
    props = undefined;
  }); 

  it('renders a pair of buttons', () => {
    props = { 
      hasVoted: '', 
      pair: ['Germany', 'Spain'],
      vote: jest.fn()
    };
    const buttons = shallowRender(props).find('button');

    expect(buttons.length).toBe(2);
    expect(buttons.at(0).render().text()).toBe(props.pair[0]);
    expect(buttons.at(1).render().text()).toBe(props.pair[1]);
  });

  it('invokes callback when a button is clicked', () => {
    const mockCallback = jest.fn();
    props = { 
      hasVoted: '', 
      pair: ['Germany', 'Spain'],
      vote: mockCallback
    };
    
    const button = shallowRender(props).find('button').first();
    button.simulate('click');
    
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('disables buttons when user has voted', () => {
    props = {
      hasVoted: 'Germany',
      pair: ['Germany', 'Spain'],
      vote: jest.fn()
    };

    const disabledButtons = shallowRender(props).find('[disabled=true]');
    expect(disabledButtons.length).toBe(2);
  });

  it('adds label to the voted entry', () => {
    props = {
      hasVoted: 'Germany',
      pair: ['Germany', 'Spain'],
      vote: jest.fn()
    };

    const button = shallowRender(props).find('.label').first();
    expect(button.render().text()).toBe('Voted');
  });
});