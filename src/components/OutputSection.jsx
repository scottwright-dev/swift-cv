import PropTypes from 'prop-types';
function OutputSection({ formValues = {} }) {
  return (
    <div className="mx-auto max-w-7xl flex-1 px-4 pt-14 shadow-2xl sm:px-6 lg:px-8">
      <ul>
        {Object.values(formValues).map((value, index) => (
          <li key={index} className="mb-2">
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

OutputSection.propTypes = {
  formValues: PropTypes.object,
};

export default OutputSection;
