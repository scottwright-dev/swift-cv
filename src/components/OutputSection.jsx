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

  return (
    <article className="flex flex-1 flex-col shadow-2xl">
      <header>
        <CVHeader
          userPhoto={userPhoto}
          name={name}
          surname={surname}
          jobTitle={jobTitle}
        />
      </header>
      <section className="flex flex-grow">
        <aside className="w-1/3 border-r pt-2">
          <CVPersonalInfo
            phone={phone}
            email={email}
            linkedIn={linkedIn}
            website={website}
          />
        </aside>
        <main className="w-2/3">
          {summary && <CVSummary summary={summary} />}
        </main>
      </section>
    </article>
  );
}

OutputSection.propTypes = {
  formValues: PropTypes.object.isRequired,
  labelsToIds: PropTypes.object.isRequired,
};

export default OutputSection;
