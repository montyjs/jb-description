import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../Components/Overview';

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

it('Overview renders without crashing', () => {
  shallow(<Overview {...dummyData} />);
});
