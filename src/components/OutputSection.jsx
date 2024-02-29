import PropTypes from 'prop-types';
import CVHeader from './CVHeader';

function OutputSection({ formValues = {} }) {
  const isImage = (value) =>
    typeof value === 'string' && value.startsWith('blob:');

  const userPhoto = Object.values(formValues).find(isImage);

  console.log(formValues);

  const nonImageFormValues = Object.fromEntries(
    Object.entries(formValues).filter(([_, value]) => !isImage(value)),
  );

  return (
    <div className="mx-auto max-w-7xl flex-1 shadow-2xl">
      <CVHeader userPhoto={userPhoto} />
      {Object.entries(nonImageFormValues).map(([id, value]) => (
        <div key={id} className="mb-2">
          <div className="ml-4">
            <span>{value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

OutputSection.propTypes = {
  formValues: PropTypes.object,
  name: PropTypes.string,
  surname: PropTypes.string,
};

export default OutputSection;
