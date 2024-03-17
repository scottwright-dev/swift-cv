import PropTypes from 'prop-types';

function CVWorkExperience({ formValues }) {
  // Filter work experience items
  const workExperienceItems = Object.entries(formValues)
    .filter(([key]) => key.startsWith('work-'))
    .reduce((acc, [key, value]) => {
      const [, fieldName, index] = key.split('-');
      if (!acc[index]) {
        acc[index] = {};
      }
      acc[index][fieldName] = value;
      return acc;
    }, {});

  return (
    <section className="mb-4 ml-4 space-y-1 text-xs font-thin">
      <header className="mb-2 flex items-center text-sm font-normal">
        <span className="text-lg">Work Experience</span>
      </header>
      {Object.values(workExperienceItems).map((item, index) => (
        <div key={index} className="mb-4">
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
        </div>
      ))}
    </section>
  );
}

CVWorkExperience.propTypes = {
  formValues: PropTypes.object.isRequired,
};

export default CVWorkExperience;
