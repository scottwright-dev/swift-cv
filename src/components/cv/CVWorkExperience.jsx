import PropTypes from 'prop-types';
import { extractFormFieldsByPrefix } from '../formUtils/extractFormFieldsByPrefix';

function CVWorkExperience({ formValues }) {
  const workExperienceGroups = Object.values(
    extractFormFieldsByPrefix(formValues, 'work-'),
  );

  const hasContent = workExperienceGroups.some(
    ({ position, company, startdate, enddate, description }) =>
      position || company || startdate || enddate || description,
  );

  if (!hasContent) {
    return null;
  }

  return (
    <section className="mb-4 ml-4 space-y-1 text-xs font-thin">
      <header className="relative mb-2 text-sm font-normal">
        <span className="text-lg">
          Work Experience
          <span
            className="absolute bottom-0 left-0 border-b-2 border-slate-200"
            style={{ width: '35px' }}
          ></span>
        </span>
      </header>
      {workExperienceGroups.map((item) => (
        <div key={item.id} className="mb-4">
          <div className="flex items-center">
            {item.position && (
              <span className="font-semibold">{item.position}</span>
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
