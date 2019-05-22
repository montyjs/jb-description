import React from 'react';
import { shallow } from 'enzyme';
import Description from '../Components/Description';


const sum = require('../../sum');

test('description', () => {
  expect(sum(1, 2)).toBe(3);
});
