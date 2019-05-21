import React from 'react';

const Description = ({
  outsole, bestuse, climbingshoetype, last, upper, lining, footwearclosure, resole, gender, weight,
}) => {
  const style = { fontWeight: 'bold' };
  return (
    <div className="description-container">
      <h1>The nitty gritty</h1>
      <div className="description-features">
        <h2>Features</h2>
        <ul>
          {/* consider making these more dependent on fetched data */}
          <li>
            {`${upper} uppers provide an accurate and secure fit`}
          </li>
          <li>Lined tongues help manage moisture and are comfortable next to skin</li>
          <li>
            {`5mm ${outsole} soles provide good grip and stand up to regular use`}
          </li>
          <li>Quick-pull lacing system delivers a snug, precise fit</li>
          <li>Shoes can be resoled</li>
        </ul>
        <h3>Imported</h3>
        <a href="https://www.rei.com/b/la-sportiva/c/mens-climbing-shoes">View all La Sportiva Men's Climbing Shoes</a>
      </div>
      <div className="description-tech-specs">
        <h2>Technical Specs</h2>
        <div className="description-table">
          <table>
            <tbody>
              <tr>
                <td><b>Best Use</b></td>
                <td>{`${bestuse}`}</td>
              </tr>
              <tr>
                <td><b>Climbing Shoe Type</b></td>
                <td>{`${climbingshoetype}`}</td>
              </tr>
              <tr>
                <td><b>Last</b></td>
                <td>{`${last}`}</td>
              </tr>
              <tr>
                <td><b>Upper</b></td>
                <td>{`${upper}`}</td>
              </tr>
              <tr>
                <td><b>Lining</b></td>
                <td>{`${lining}`}</td>
              </tr>
              <tr>
                <td><b>Outsole</b></td>
                <td>{`${outsole}`}</td>
              </tr>
              <tr>
                <td><b>Footwear Closure</b></td>
                <td>{`${footwearclosure}`}</td>
              </tr>
              <tr>
                <td><b>Can Be Resoled</b></td>
                <td>{`${resole}`}</td>
              </tr>
              <tr>
                <td><b>Gender</b></td>
                <td>{`${gender}`}</td>
              </tr>
              <tr>
                <td><b>Weight (Pair)</b></td>
                <td>{`${weight}`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Description;
