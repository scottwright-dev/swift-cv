import PropTypes from 'prop-types';
import CVSection from './CVSection';
import { extractFormFieldsByPrefix } from '../formUtils/extractFormFieldsByPrefix';

function CVQualification({ formValues }) {
  const qualificationItems = extractFormFieldsByPrefix(
    formValues,
    'qualification-',
  );

  const renderQualificationItem = (item) => (
    <>
      <div className="flex items-center">
        <span className="mr-2.5 text-base leading-none">•</span>
        <span>
          {item.institute && <span>{item.institute}</span>}
          {item.name && item.institute && <span>, </span>}
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
      title="Qualifications"
      items={Object.values(qualificationItems)}
      renderItem={renderQualificationItem}
    />
  );
}

CVQualification.propTypes = {
  formValues: PropTypes.object.isRequired,
};

export default CVQualification;
