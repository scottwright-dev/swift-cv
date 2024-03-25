import PropTypes from 'prop-types';
import { extractFormFieldsByPrefix } from '../formUtils/extractFormFieldsByPrefix';

function CVQualification({ formValues }) {
  const qualificationGroups = Object.values(
    extractFormFieldsByPrefix(formValues, 'qualification-'),
  );

  const hasContent = qualificationGroups.some(
    ({ name, institute, startdate, enddate }) =>
      name || institute || startdate || enddate,
  );

  if (!hasContent) {
    return null;
  }

  return (
    <section className="mb-4 ml-4 space-y-1 text-xs font-thin">
      <header className="mb-2 flex items-center text-sm font-normal">
        <span className="text-lg">Qualifications</span>
      </header>
      {qualificationGroups.map((item) => (
        <div key={item.id} className="mb-4">
          <div className="flex items-center">
            {item.name && <span className="font-bold">{item.name}</span>}
            {item.name && item.institute && <span>, </span>}
            {item.institute && (
              <span className="font-thin text-gray-500">{item.institute}</span>
            )}
          </div>
          {(item.startdate || item.enddate) && (
            <div className="flex items-center">
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

CVQualification.propTypes = {
  formValues: PropTypes.object.isRequired,
};

export default CVQualification;
