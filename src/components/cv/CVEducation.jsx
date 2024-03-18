import PropTypes from 'prop-types';

function CVEducation({ formValues }) {
  // Filter education items from formValues
  const educationItems = Object.entries(formValues)
    .filter(([key]) => key.startsWith('education-'))
    .reduce((acc, [key, value]) => {
      // Split the key into its components
      const [, fieldName, index] = key.split('-');
      if (!acc[index]) {
        // If accumulator doesn't have a key for this index, create an empty object for it
        acc[index] = {};
      }
      // Add field to object for this index
      acc[index][fieldName] = value;
      return acc;
    }, {});

  return (
    <section className="mb-4 ml-4 space-y-1 text-xs font-thin">
      {Object.keys(educationItems).length > 0 && (
        <>
          <header className="mb-2 flex items-center text-sm font-normal">
            <span className="text-lg">Education</span>
          </header>
          {Object.values(educationItems).map((item, index) => (
            <div key={index} className="mb-4">
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
            </div>
          ))}
        </>
      )}
    </section>
  );
}

CVEducation.propTypes = {
  formValues: PropTypes.object.isRequired,
};

export default CVEducation;
