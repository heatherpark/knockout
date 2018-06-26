import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Results from './Results';

Enzyme.configure({ adapter: new Adapter() });

describe('Results', () => {
  it('renders entries with vote counts or zero', () => {
    const pair = ['Germany', 'Spain'];
    const tally = { 'Germany': 5 };
    const component = shallow(<Results pair={pair} tally={tally} />);
    
    const entries = component.find('.entry h1');
    const tallies = component.find('.vote-count');

    expect(entries).toHaveLength(2);
    expect(entries.at(0).render().text()).toBe(pair[0]);
    expect(entries.at(1).render().text()).toBe(pair[1]);
    expect(tallies.at(0).render().text()).toBe('5');
    expect(tallies.at(1).render().text()).toBe('0');
  });
});

