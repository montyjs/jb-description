import React from 'react';
import ReactDOM from 'react-dom';

const incrementer = (start, end) => {
  const array = [];
  for (let i = start; i < end; i += 1) {
    if (i / 2 !== 47.5) {
      array.push(i / 2);
    }
  }
  return array;
};

const usMens = [4, 4.5, '4.5+', 5, 5.5, 6, 6.5, '6.5+', 7, 7.5, 8, 8.5, 8.5, 9, 9.5, 10, 10.5, 10.5, 11, 11.5, 12, 12.5, 12.5, 13, 14];

const usWomens = [5, 5.5, '5.5+', 6, 6.5, 7, 7.5, '7.5+', 8, 8.5, 9, 9.5, 9.5, 10, 10.5, 11, 11.5, 11.5, 12, 12.5, 13, 13.5, 13.5, 14];

const SizeChart = () => (
  <div className="sizeChart-container">
    <h2>Size Chart</h2>
    <table>
      <tr>
        <th className="headcol" />
        {incrementer(72, 97).map(num => <td className="headlong" key={`${num}size`}>{num.toString()}</td>)}
      </tr>
      <tr>
        <th className="headcol">U.S. Men's</th>
        {usMens.map(num => <td className="long" key={`${num}size`}>{num.toString()}</td>)}
      </tr>
      <tr>
        <th className="headcol">U.S. Women's</th>
        {usWomens.map(num => <td className="long" key={`${num}size`}>{num.toString()}</td>)}
      </tr>
      <tr>
        <th className="headcol">EU</th>
        {incrementer(72, 97).map(num => <td className="long" key={`${num}size`}>{num.toString()}</td>)}
      </tr>
    </table>
  </div>
);

export default SizeChart;
