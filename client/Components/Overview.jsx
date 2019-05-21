import React from 'react';

const Overview = (props) => {
  return (
    <div className="overview-containter">
      <div className="Overview-Quote">
        <h1>Designed for the climber looking for a single pair to do it all, the La Sportiva Tarantulace are jack-of-all-trades climbing shoes comfortable enough for all-day climbs or a trip to the rock gym.</h1>
      </div>
      <div className="Overview-Specs">
        <div className="os-item">
          <span className="os-title">Climbing Shoe Type</span>
          <div value={props.climbing_shoe_type} />
        </div>
        <div className="os-item">
          <span className="os-title">Climbing Shoe Type</span>
          <div value={props.last_} />
        </div>
        <div className="os-item">
          <span className="os-title">Climbing Shoe Type</span>
          <div value={props.resole_} />
        </div>
        <div className="os-item">
          <span className="os-title">Climbing Shoe Type</span>
          <div value={props.upper_} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
