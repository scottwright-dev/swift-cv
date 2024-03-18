import PropTypes from 'prop-types';

function CVQualification({ formValues }) {
  // Filter qualification items from formValues
  const qualificationItems = Object.entries(formValues)
    .filter(([key]) => key.startsWith('qualification-'))
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
      {Object.keys(qualificationItems).length > 0 && (
        <>
          <header className="mb-2 flex items-center text-sm font-normal">
            <span className="text-lg">Qualifications</span>
          </header>
          {Object.values(qualificationItems).map((item, index) => (
            <div key={index} className="mb-4">
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
            </div>
          ))}
        </>
      )}
    </section>
  );
}

CVQualification.propTypes = {
  formValues: PropTypes.object.isRequired,
};

export default CVQualification;
