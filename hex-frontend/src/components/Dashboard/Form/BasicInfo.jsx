import React from 'react';
import './style.css'

const BasicInfo = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Basic Project Information</h2>
      <div className="form-group"> 
        <label>Project Name</label>
        <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Project ID</label>
        <input type="text" name="projectId" value={formData.projectId} readOnly />
      </div>
      <div className="form-group">
        <label>Project Type</label>
        <select name="projectType" value={formData.projectType} onChange={handleChange}>
          <option value="">Select type</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Emergency">Emergency</option>
        </select>
      </div>
      <div className="form-group">
        <label>Brief Description</label>
        <textarea name="briefDescription" value={formData.briefDescription} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Detailed Project Objectives</label>
        <textarea name="detailedObjectives" value={formData.detailedObjectives} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Primary Department Responsible</label>
        <input type="text" name="primaryDepartment" value={formData.primaryDepartment} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Other Departments Involved</label>
        <input type="text" name="otherDepartments" value={formData.otherDepartments} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Project Manager/Point of Contact</label>
        <input type="text" name="projectManager" value={formData.projectManager} onChange={handleChange} />
      </div>
    </>
  );
};

export default BasicInfo;
