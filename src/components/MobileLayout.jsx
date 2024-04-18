import PropTypes from 'prop-types';
import { useState } from 'react';
import InputSection from './form/FormInputSection';
import OutputSection from './cv/CVOutputSection';
import ButtonPrimary from './ButtonPrimary';

function MobileLayout({
  formValues,
  labelsToIds,
  onInputChange,
  onDelete,
  onPreview,
  onEdit,
}) {
  const [activeScreen, setActiveScreen] = useState('inputsection');

  const handlePreviewClick = () => {
    setActiveScreen('outputsection');
    onPreview();
  };

  const handleEditClick = () => {
    setActiveScreen('inputsection');
    onEdit();
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={`absolute left-0 top-0 h-full w-full transform transition-transform duration-500 ease-in-out ${activeScreen === 'inputsection' ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="mb-4 text-right">
          <ButtonPrimary text="Preview" onClick={handlePreviewClick} />
        </div>
        <InputSection
          onInputChange={onInputChange}
          onDelete={onDelete}
          formValues={formValues}
        />
      </div>
      <div
        className={`absolute left-0 top-0 h-full w-full transform transition-transform duration-500 ease-in-out ${activeScreen === 'outputsection' ? '-translate-x-0' : '-translate-x-full'}`}
      >
        <div className="mb-4 text-right">
          <ButtonPrimary text="Edit" onClick={handleEditClick} />
        </div>
        <OutputSection formValues={formValues} labelsToIds={labelsToIds} />
      </div>
    </div>
  );
}

export default MobileLayout;

MobileLayout.propTypes = {
  formValues: PropTypes.object.isRequired,
  labelsToIds: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onPrint: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
};
