import PropTypes from 'prop-types';
import CVHeader from './CVHeader';

function OutputSection({ formValues, labelsToIds }) {
  const userPhoto = formValues[labelsToIds['Photo']];
  const name = formValues[labelsToIds['Name']];
  const surname = formValues[labelsToIds['Surname']];
  const jobTitle = formValues[labelsToIds['Job Title']];

  // Exclude photo, name, surname from the nonImageFormValues
  const excludedKeys = new Set([
    labelsToIds['Photo'],
    labelsToIds['Name'],
    labelsToIds['Surname'],
    labelsToIds['Job Title'],
  ]);
  const nonImageFormValues = Object.entries(formValues).filter(
    ([key]) => !excludedKeys.has(key),
  );

  return (
    <div className="mx-auto max-w-7xl flex-1 shadow-2xl">
      <CVHeader
        userPhoto={userPhoto}
        name={name}
        surname={surname}
        jobTitle={jobTitle}
      />
      {nonImageFormValues.map(([id, value]) => (
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
  formValues: PropTypes.object.isRequired,
  labelsToIds: PropTypes.object.isRequired,
};

export default OutputSection;
