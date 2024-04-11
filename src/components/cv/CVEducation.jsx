import PropTypes from 'prop-types';
import { extractFormFieldsByPrefix } from '../formUtils/extractFormFieldsByPrefix';

function CVEducation({ formValues }) {
  const educationGroups = Object.values(
    extractFormFieldsByPrefix(formValues, 'education-'),
  );

  const hasContent = educationGroups.some(
    ({ name, school, startdate, enddate }) =>
      name || school || startdate || enddate,
  );

  if (!hasContent) {
    return null;
  }

  return (
    <section className="m-6 space-y-1 text-xs font-thin">
      <header className="mb-4 flex items-center text-sm font-normal">
        <span className="text-lg">
          <span
            className="inline-block border-b-2 border-slate-200"
            style={{ width: '35px' }}
          >
            Education
          </span>
        </span>
      </header>
      {educationGroups.map((item) => (
        <div key={item.id}>
          <div className="flex items-center">
            {item.name && <span>{item.name}</span>}
            {item.name && item.school && <span>, </span>}
            {item.school && <span className="font-light">{item.school}</span>}
          </div>
          {(item.startdate || item.enddate) && (
            <div className="mb-4 flex items-center font-thin text-gray-500">
              {item.startdate && <span>{item.startdate}</span>}
              {item.startdate && item.enddate && <span> - </span>}
              {item.enddate && <span>{item.enddate}</span>}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

CVEducation.propTypes = {
  formValues: PropTypes.object.isRequired,
};

export default CVEducation;
