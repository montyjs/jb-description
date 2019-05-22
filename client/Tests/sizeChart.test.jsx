import React from 'react';
import { shallow } from 'enzyme';
import SizeChart from '../Components/SizeChart';

it('SizeChart renders without crashing', () => {
  const dataMens = Array(24).fill('mens');
  const dataWomens = Array(24).fill('mens');
  shallow(<SizeChart mensSizes={dataMens} womensSizes={dataWomens} />);
});
