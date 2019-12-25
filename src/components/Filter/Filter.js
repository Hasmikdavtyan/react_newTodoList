import React from 'react';

import './Filter.css';

const Filter = () => {
  return (
    <div className="row filter-data">
      <div className="form-group col-md-7">
        <input type="text" className="form-control-plaintext" placeholder="Type to Search" />
      </div>
      <div className="form-group col-md-5">
        <button className="btn btn-outline-primary mb-2 active">All</button>
        <button className="btn btn-outline-primary mb-2">Active</button>
        <button className="btn btn-outline-primary mb-2">Done</button>
      </div>
    </div>
  );
};

export default Filter;