import PropTypes from 'prop-types';

function CVWorkExperience({ formValues }) {
  // Filter work experience items
  const workExperienceItems = Object.entries(formValues)
    .filter(([key]) => key.startsWith('work-'))
    // Reduce filtered entries into an object where each key is the index of the work experience item
    // & each val is an object containing the fields of the work experience item
    .reduce((acc, [key, value]) => {
      const [, fieldName, index] = key.split('-');
      // If the accumulator doesn't have a key for this index, create an empty object for it
      if (!acc[index]) {
        acc[index] = {};
      }
      // Add field to object for this index
      acc[index][fieldName] = value;
      return acc;
    }, {});

  return (
    <section className="mb-4 ml-4 space-y-1 text-xs font-thin">
      {Object.keys(workExperienceItems).length > 0 && (
        <>
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
        </>
      )}
    </section>
  );
}

CVWorkExperience.propTypes = {
  formValues: PropTypes.object.isRequired,
};

export default CVWorkExperience;
