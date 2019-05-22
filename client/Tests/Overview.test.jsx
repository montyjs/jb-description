import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../Components/Overview';

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

describe('Overview Renders', () => {
  it('Overview renders without crashing', () => {
    shallow(<Overview {...dummyData} />);
  });
});

describe('Overview', () => {
  it('renders the specs with the passed in props', () => {
    const wrapper = shallow(<Overview {...dummyData} />);
    const climbingshoetype = <div className="os-value">Neutral</div>;
    const last = <div className="os-value">Slip-Lasted</div>;
    const resole = <div className="os-value">Yes</div>;
    const upper = <div className="os-value">Leather/synthetic leather</div>;

    expect(wrapper.contains(climbingshoetype)).toEqual(true);
    expect(wrapper.contains(last)).toEqual(true);
    expect(wrapper.contains(resole)).toEqual(true);
    expect(wrapper.contains(upper)).toEqual(true);
  });
});
