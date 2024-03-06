import PropTypes from 'prop-types';
import CVHeader from './CVHeader';
import CVPersonalInfo from './CVPersonalInfo';
import CVSummary from './CVSummary';

function OutputSection({ formValues, labelsToIds }) {
  // CVHeader fields
  const userPhoto = formValues[labelsToIds['Photo']];
  const name = formValues[labelsToIds['Name']];
  const surname = formValues[labelsToIds['Surname']];
  const jobTitle = formValues[labelsToIds['Job Title']];
  // CVPersonalInfo fields
  const phone = formValues[labelsToIds['Phone']];
  const email = formValues[labelsToIds['Email']];
  const linkedIn = formValues[labelsToIds['LinkedIn']];
  const website = formValues[labelsToIds['Website']];
  // CVSummary fields
  const summary = formValues[labelsToIds['Summary']];
  console.log('summary in OutputSection is:', summary);

  // const excludedKeys = new Set([
  //   labelsToIds['Photo'],
  //   labelsToIds['Name'],
  //   labelsToIds['Surname'],
  //   labelsToIds['Job Title'],
  //   labelsToIds['Phone'],
  //   labelsToIds['Email'],
  //   labelsToIds['LinkedIn'],
  //   labelsToIds['Website'],
  //   labelsToIds['Summary'],
  // ]);
  // const nonImageFormValues = Object.entries(formValues).filter(
  //   ([key]) => !excludedKeys.has(key),
  // );
  // console.log('nonImageFormValues:', nonImageFormValues);
  // const leftColumnValues = nonImageFormValues.slice(3);
  // console.log('leftColumnValues:', leftColumnValues);
  // const rightColumnValues = nonImageFormValues.slice(5);
  // console.log('rightColumnValues:', rightColumnValues);

  console.log('All form values:', formValues);
  console.log('Labels to IDs mapping:', labelsToIds);

  return (
    <div className="flex flex-1 flex-col shadow-2xl">
      <CVHeader
        userPhoto={userPhoto}
        name={name}
        surname={surname}
        jobTitle={jobTitle}
      />
      <div className="flex flex-grow">
        <div className="w-1/3 border-2 border-red-400">
          <CVPersonalInfo
            phone={phone}
            email={email}
            linkedIn={linkedIn}
            website={website}
          />
          {/* {leftColumnValues.map(([id, value]) => (
            <div key={id} className="mb-2">
              <span>{value}</span>
            </div>
          ))} */}
        </div>
        <div className="w-2/3 border-2 border-blue-400">
          <CVSummary summary={summary} />
          {/* {rightColumnValues.map(([id, value]) => (
            <div key={id} className="mb-2">
              <span>{value}</span>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

OutputSection.propTypes = {
  formValues: PropTypes.object.isRequired,
  labelsToIds: PropTypes.object.isRequired,
};

export default OutputSection;
