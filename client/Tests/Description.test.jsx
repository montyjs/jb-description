import React from 'react';
import { shallow } from 'enzyme';
import Description from '../Components/Description';

const dummyData = {
  bestuse: 'Rock Climbing',
  climbingshoetype: 'Neutral',
  footwearclosure: 'Lace-up',
  gender: 'Unisex',
  id: 1,
  last: 'Slip-Lasted',
  lining: 'No',
  name: 'La Sportiva Tarantulace Climbing Shoes',
  outsole: 'FriXion RS rubber',
  resole: 'Yes',
  upper: 'Leather/synthetic leather',
  weight: '1 lb. 2.3 oz.',
};

it('Description renders without crashing', () => {
  shallow(<Description {...dummyData} />);
});
