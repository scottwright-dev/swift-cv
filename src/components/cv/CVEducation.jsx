import PropTypes from 'prop-types';
import CVSection from './CVSection';
import { extractFormFieldsByPrefix } from '../formUtils/extractFormFieldsByPrefix';

function CVEducation({ formValues }) {
  const educationItems = extractFormFieldsByPrefix(formValues, 'education-');

  const renderEducationItem = (item) => (
    <>
      <div className="flex items-center">
        <span className="mr-2.5 text-base leading-none">•</span>
        <span>
          {item.school && <span>{item.school}</span>}
          {item.name && item.school && <span>, </span>}
          {item.name && <span>{item.name}</span>}
        </span>
      </div>
      {(item.startdate || item.enddate) && (
        <div className="flex items-center">
          <span className="mr-2.5 text-base leading-none">•</span>
          <span>
            {item.startdate && <span>{item.startdate}</span>}
            {item.startdate && item.enddate && <span> - </span>}
            {item.enddate && <span>{item.enddate}</span>}
          </span>
        </div>
      )}
    </>
  );

  return (
    <CVSection
      title="Education"
      items={Object.values(educationItems)}
      renderItem={renderEducationItem}
    />
  );
}

CVEducation.propTypes = {
  formValues: PropTypes.object.isRequired,
};

export default CVEducation;
