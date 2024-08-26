import React from 'react';

const LocationInfo = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Location Information</h2>
      <div className="form-group">
        <label>Ward Number</label>
        <input type="text" name="wardNumber" value={formData.wardNumber} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Specific Address/Area</label>
        <input type="text" name="specificAddress" value={formData.specificAddress} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>GIS Coordinates</label>
        <input type="text" name="gisCoordinates" value={formData.gisCoordinates} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Affected Area (in sq. meters or km)</label>
        <input type="text" name="affectedArea" value={formData.affectedArea} onChange={handleChange} />
      </div>
    </>
  );
};

export default LocationInfo;
