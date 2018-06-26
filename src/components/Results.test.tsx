import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Results from './Results';
import Winner from './Winner';

Enzyme.configure({ adapter: new Adapter() });
  
describe('Results', () => {
  let props;

  const shallowRender = shallowRenderProps => 
    shallow(<Results {...shallowRenderProps} />);

  afterEach(() => {
    props = undefined;
  }); 

  it('renders entries with vote counts or zero', () => {
    props = {
      pair: ['Germany', 'Spain'],
      tally: { 'Germany': 5 }
    };
    const resultsComponent = shallowRender(props);
    const entries = resultsComponent.find('.entry h1');
    const tallies = resultsComponent.find('.vote-count');

    expect(entries).toHaveLength(2);
    expect(entries.at(0).render().text()).toBe(props.pair[0]);
    expect(entries.at(1).render().text()).toBe(props.pair[1]);
    expect(tallies.at(0).render().text()).toBe('5');
    expect(tallies.at(1).render().text()).toBe('0');
  });

  it('invokes the next callback when next button is clicked', () => {
    const mockCallback = jest.fn();
    props = {
      pair: ['Germany', 'Spain'],
      next: mockCallback,
      tally: {},
    };
    const button = shallowRender(props).find('.next').first();

    button.simulate('click');
    
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('renders the winner when there is one', () => {
    props = {
      pair: ['Germany', 'Spain'],
      next: jest.fn(),
      tally: {},
      winner: 'Germany'
    };
    const winnerComponents = shallowRender(props).find(Winner);

    expect(winnerComponents.length).toBe(1);
  });
});

