import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Vote from './Vote';
import Voting from './Voting';
import Winner from './Winner';

Enzyme.configure({ adapter: new Adapter() });

describe('Voting', () => {
  it('renders just the winner when there is one', () => {
    const component = shallow(<Voting
      winner="Germany"
      hasVoted="Germany"
      pair={['Germany', 'Spain']}
      vote={jest.fn()} />);

    expect(component.find(Winner)).toHaveLength(1);
    expect(component.find(Vote)).toHaveLength(0);
  });
});