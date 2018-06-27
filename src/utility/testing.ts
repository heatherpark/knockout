import * as Enzyme from 'enzyme';

export const renderedText = (
  elements: Enzyme.ShallowWrapper<any>, 
  index: number
) => elements.at(index).render().text();