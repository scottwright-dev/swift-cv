import PropTypes from 'prop-types';

function OutputSection({ formValues = {} }) {
  const isImage = (value) =>
    typeof value === 'string' && value.startsWith('blob:');
  return (
    <div className="mx-auto max-w-7xl flex-1 px-4 pt-14 shadow-2xl sm:px-6 lg:px-8">
      {Object.entries(formValues).map(([id, value]) => {
        return (
          <div key={id} className="mb-2">
            <div className="ml-4">
              {isImage(value) ? (
                <img
                  className="h-24 w-24 rounded-full object-cover"
                  src={value}
                  alt={`Profile photo`}
                />
              ) : (
                <span>{value}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

OutputSection.propTypes = {
  formValues: PropTypes.object,
};

export default OutputSection;
