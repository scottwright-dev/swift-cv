import PropTypes from 'prop-types';
import { extractFormFieldsByPrefix } from '../formUtils/extractFormFieldsByPrefix';

function CVWorkExperience({ formValues }) {
  const workExperienceGroups = Object.values(
    extractFormFieldsByPrefix(formValues, 'work-'),
  );

  return (
    <section className="mb-4 ml-4 space-y-1 text-xs font-thin">
      <header className="mb-2 flex items-center text-sm font-normal">
        <span className="text-lg">Work Experience</span>
      </header>
      {workExperienceGroups.map((item, index) => (
        <div key={`work-experience-${index}`} className="mb-4">
          <div className="flex items-center">
            {item.position && (
              <span className="font-bold">{item.position}</span>
            )}
            {item.position && item.company && <span>, </span>}
            {item.company && (
              <span className="font-thin text-gray-500">{item.company}</span>
            )}
          </div>
          {(item.startdate || item.enddate) && (
            <div className="flex items-center">
              {item.startdate && <span>{item.startdate}</span>}
              {item.startdate && item.enddate && <span> - </span>}
              {item.enddate && <span>{item.enddate}</span>}
            </div>
          )}
          {item.description && (
            <div className="whitespace-pre-line">{item.description}</div>
          )}
        </div>
      ))}
    </section>
  );
}

CVWorkExperience.propTypes = {
  formValues: PropTypes.object.isRequired,
};

export default CVWorkExperience;
