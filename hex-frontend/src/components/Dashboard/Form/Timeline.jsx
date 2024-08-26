import React from 'react';

const Timeline = ({ formData, handleChange }) => {
  return (
    <>
      <h2>Timeline</h2>
      <div className="form-group">
        <label>Proposed Start Date</label>
        <input type="date" name="proposedStartDate" value={formData.proposedStartDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Estimated Completion Date</label>
        <input type="date" name="estimatedCompletionDate" value={formData.estimatedCompletionDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Key Milestones and Deadlines</label>
        <textarea name="keyMilestones" value={formData.keyMilestones} onChange={handleChange} />
      </div>
    </>
  );
};

export default Timeline;