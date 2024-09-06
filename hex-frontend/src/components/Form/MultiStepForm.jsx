import React, { useState } from 'react';
import axios from 'axios';
import BasicInfo from './BasicInfo';
import LocationInfo from './LocationInfo';
import Timeline from './Timeline';

const MultiStepForm = ({ onClose }) => {
  const apiUrl = process.env.EXPRESS_API_URL
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: '',
    projectId: '',
    projectType: '',
    briefDescription: '',
    detailedObjectives: '',
    primaryDepartment: '',
    otherDepartments: '',
    projectManager: '',
    locationInfo: {
      wardNo: '',
      specificAddress: '',
      latitude: '',
      longitude: '',
      affectedArea: ''
    },
    proposedStartDate: '',
    estimatedCompletionDate: '',
    keyMilestones: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevFormData) => {
      if (name in prevFormData.locationInfo) {
        return {
          ...prevFormData,
          locationInfo: {
            ...prevFormData.locationInfo,
            [name]: value
          }
        };
      } else {
        return {
          ...prevFormData,
          [name]: value
        };
      }
    });
  };
  
  

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/api/projects/addProject`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': `${localStorage.getItem('authToken')}`
        }
      });
      console.log('Project created:', response.data);
    } catch (error) {
      console.error('Error creating project:', error.response?.data || error.message);
    }
    onClose();  // Close modal after submission
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BasicInfo formData={formData} handleChange={handleChange} />;
      case 2:
        return <LocationInfo formData={formData} handleChange={handleChange} />;
      case 3:
        return <Timeline formData={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className={step >= 1 ? 'active' : ''}></div>
        <div className={step >= 2 ? 'active' : ''}></div>
        <div className={step >= 3 ? 'active' : ''}></div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="button-group">
          {step > 1 && <button type="button" className="secondary" onClick={prevStep}>Previous</button>}
          {step < 3 && <button type="button" className="primary" onClick={nextStep}>Next</button>}
          {step === 3 && <button type="submit" className="primary" >Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
