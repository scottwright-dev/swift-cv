import PropTypes from 'prop-types';
import CVSection from './CVSection';
import { extractFormFieldsByPrefix } from '../formUtils/extractFormFieldsByPrefix';
function CVWorkExperience({ formValues }) {
  const workExperienceItems = extractFormFieldsByPrefix(formValues, 'work-');

  const renderWorkExperienceItem = (item) => (
    <>
      <div className="flex items-center">
        <span className="mr-2.5 text-base leading-none">•</span>
        <span>
          {item.company && <span>{item.company}</span>}
          {item.position && item.company && <span>, </span>}
          {item.position && <span>{item.position}</span>}
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
      {item.description && (
        <div className="whitespace-pre-line">
          <span>{item.description}</span>
        </div>
      )}
    </>
  );

  return (
    <CVSection
      title="Work Experience"
      items={Object.values(workExperienceItems)}
      renderItem={renderWorkExperienceItem}
    />
  );
}

CVWorkExperience.propTypes = {
  formValues: PropTypes.object.isRequired,
};

export default CVWorkExperience;
