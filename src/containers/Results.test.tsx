import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import { Results } from './Results';
import Winner from '../components/Winner';

Enzyme.configure({ adapter: new Adapter() });
  
describe('Results', () => {
  const shallowRender = shallowRenderProps => 
    shallow(<Results {...shallowRenderProps} />);

  it('renders entries with vote counts or zero', () => {
    let props = {
      pair: ['Germany', 'Spain'],
      tally: { 'Germany': 5 }
    };
    const resultsComponent = shallowRender(props);
    const entries = resultsComponent.find('.entry h1');
    const tallies = resultsComponent.find('.vote-count');

    expect(entries).toHaveLength(2);

    const renderedText = (elements, index) => 
      elements.at(index).render().text();

    expect(renderedText(entries, 0)).toBe(props.pair[0]);
    expect(renderedText(entries, 1)).toBe(props.pair[1]);

    expect(renderedText(tallies, 0)).toBe('5');
    expect(renderedText(tallies, 1)).toBe('0');
  });

  it('invokes the next callback when next button is clicked', () => {
    const mockCallback = jest.fn();
    let props = {
      next: mockCallback,
      pair: ['Germany', 'Spain']
    };
    const button = shallowRender(props).find('.next').first();

    button.simulate('click');
    
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('renders the winner when there is one', () => {
    let props = {
      next: jest.fn(),
      pair: ['Germany', 'Spain'],
      tally: {},
      winner: 'Germany'
    };
    const winnerComponents = shallowRender(props).find(Winner);

    expect(winnerComponents.length).toBe(1);
  });
});

