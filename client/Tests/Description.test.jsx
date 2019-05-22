import React from 'react';
import { shallow } from 'enzyme';
import $ from 'jquery';
import Description from '../Components/Description';

const dummyData = {
  bestuse: 'Rock Climbing',
  climbingshoetype: 'Neutral',
  footwearclosure: 'Lace-up',
  gender: 'Unisex',
  last: 'Slip-Lasted',
  lining: 'No',
  outsole: 'FriXion RS rubber',
  resole: 'Yes',
  upper: 'Leather/synthetic leather',
  weight: '1 lb. 2.3 oz.',
};

describe('Description Renders', () => {
  it('Description renders without crashing', () => {
    shallow(<Description {...dummyData} />);
  });
});

describe('Description', () => {
  it('renders table with all data', () => {
    const wrapper = shallow(<Description {...dummyData} />);
    const keys = Object.keys(dummyData);
    keys.map((key) => {
      const value = dummyData[key];
      return expect(wrapper.contains(<td>{`${value}`}</td>)).toBe(true);
    });
  });
});
