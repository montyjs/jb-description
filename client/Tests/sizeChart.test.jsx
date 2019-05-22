import React from 'react';
import { shallow } from 'enzyme';
import SizeChart from '../Components/SizeChart';

it('renders without crashing', () => {
  const dataMens = Array(24).fill('mens');
  const dataWomens = Array(24).fill('mens');
  shallow(<SizeChart mensSizes={dataMens} womensSizes={dataWomens} />);
});

// const sum = require('../../sum');

// test('sizechart', () => {
//   expect(sum(1, 2)).toBe(3);
// });
