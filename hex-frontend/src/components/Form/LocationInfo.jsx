import React from 'react';
import './style.css';

const LocationInfo = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Location Information</h2>
      <div className="form-group">
        <label>Ward Number</label>
        <input
          type="text"
          name="wardNo"
          value={formData.locationInfo.wardNo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Specific Address/Area</label>
        <input
          type="text"
          name="specificAddress"
          value={formData.locationInfo.specificAddress}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Latitude (use https://www.maps.ie/coordinates.html to get Latitude and Longitude)</label>
        <input
          type="text"
          name="latitude"
          value={formData.locationInfo.latitude}
          onChange={handleChange}
        />

        <label>Longitude</label>
        <input
          type="text"
          name="longitude"
          value={formData.locationInfo.longitude}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Affected Area (in sq. meters or km)</label>
        <input
          type="text"
          name="affectedArea"
          value={formData.locationInfo.affectedArea}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default LocationInfo;
