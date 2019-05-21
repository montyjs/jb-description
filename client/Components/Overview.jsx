/* eslint-disable max-len */
import React from 'react';

const Overview = ({
  climbingshoetype, last, resole, upper,
}) => (
  <div className="overview-containter">
    <div className="Overview-Quote">
      <h1>Designed for the climber looking for a single pair to do it all, the La Sportiva Tarantulace are jack-of-all-trades climbing shoes comfortable enough for all-day climbs or a trip to the rock gym.</h1>
    </div>
    <div className="Overview-Specs">
      <div className="os-item">
        <span className="os-title">Climbing Shoe Type</span>
        <div>{`${climbingshoetype}`}</div>
      </div>
      <div className="os-item">
        <span className="os-title">Last</span>
        <div>{`${last}`}</div>
      </div>
      <div className="os-item">
        <span className="os-title">Can Be Resoled</span>
        <div>{`${resole}`}</div>
      </div>
      <div className="os-item">
        <span className="os-title">Upper</span>
        <div>{`${upper}`}</div>
      </div>
    </div>
  </div>
);
export default Overview;
