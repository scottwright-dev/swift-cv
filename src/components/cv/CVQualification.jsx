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
      <header className="mb-4 flex items-center text-sm font-normal">
        <span className="text-lg">
          <span
            className="inline-block border-b-2 border-slate-200"
            style={{ width: '35px' }}
          >
            Qualifications
          </span>
        </span>
      </header>
      {qualificationGroups.map((item) => (
        <div key={item.id}>
          {item.name && <div className="font-light">{item.name}</div>}
          {item.institute && (
            <div className="font-thin text-gray-500">{item.institute}</div>
          )}
          {(item.startdate || item.enddate) && (
            <div className="mb-4 flex items-center">
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
