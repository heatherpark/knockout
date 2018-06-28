import * as Enzyme from 'enzyme';

export const renderedText = (element: Enzyme.ShallowWrapper<any>) => element.render().text();

