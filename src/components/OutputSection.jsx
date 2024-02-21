import PropTypes from 'prop-types';

function OutputSection({ formValues = {} }) {
  return (
    <div className="mx-auto max-w-7xl flex-1 px-4 pt-14 shadow-2xl sm:px-6 lg:px-8">
      {Object.entries(formValues).map(([key, value]) => {
        const isImage = typeof value === 'string' && value.startsWith('blob:');
        return (
          <div key={key} className="mb-2">
            {isImage ? (
              <img className="w-40" src={value} alt="Profile photo" />
            ) : (
              <span>{value}</span>
            )}
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
