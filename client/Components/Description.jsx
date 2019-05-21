import React from 'react'

const Description = (props) => {
  return (
    <div className="description-container">
      <h1>The nitty gritty</h1>
      <div className="description-features">
        <h2>Features</h2>
        <ul>
          {/* consider making these more dependent on fetched data */}
          <li>`${props.upper_} uppers provide an accurate and secure fit`</li>
          <li>Lined tongues help manage moisture and are comfortable next to skin</li>
          <li>`5mm ${props.outsole_} soles provide good grip and stand up to regular use`</li>
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
            <colgroup>
              <col span="1" style={{ font-weight: "bold"}} />
            </colgroup>
            {/* not sure that this is the proper use of template literals */}
            <tr>
              <td><b>Best Use</b></td>
              <td>{props.best_use}</td>
            </tr>
            <tr>
              <td><b>Climbing Shoe Type</b></td>
              <td>{props.climbing_shoe_type}</td>
            </tr>
            <tr>
              <td><b>Last</b></td>
              <td>{props.last_}</td>
            </tr>
            <tr>
              <td><b>Upper</b></td>
              <td>{props.upper_}</td>
            </tr>
            <tr>
              <td><b>Lining</b></td>
              <td>{props.lining_}</td>
            </tr>
            <tr>
              <td><b>Outsole</b></td>
              <td>{props.outsole_}</td>
            </tr>
            <tr>
              <td><b>Footwear Closure</b></td>
              <td>{props.footwear_closer}</td>
            </tr>
            <tr>
              <td><b>Can Be Resoled</b></td>
              <td>{props.resole_}</td>
            </tr>
            <tr>
              <td><b>Gender</b></td>
              <td>{props.gender_}</td>
            </tr>
            <tr>
              <td><b>Weight (Pair)</b></td>
              <td>{props.weight_}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Description;
