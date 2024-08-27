import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import LocationInfo from './LocationInfo';
import Timeline from './Timeline';
import './style.css'

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize form data state here
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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

      <form>
        {renderStep()}
        <div className="button-group">
          {step > 1 && <button type="button" className="secondary" onClick={prevStep}>Previous</button>}
          {step < 3 && <button type="button" className="primary" onClick={nextStep}>Next</button>}
          {step === 3 && <button type="submit" className="primary">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
