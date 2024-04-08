import PropTypes from 'prop-types';
import CVHeader from './CVHeader';
import CVPersonalInfo from './CVPersonalInfo';
import CVSummary from './CVSummary';
import CVSkill from './CVSkill';
import CVWorkExperience from './CVWorkExperience';
import CVQualification from './CVQualification';
import CVEducation from './CVEducation';

function OutputSection({ formValues, labelsToIds }) {
  const {
    [labelsToIds['Photo']]: userPhoto,
    [labelsToIds['Name']]: name,
    [labelsToIds['Surname']]: surname,
    [labelsToIds['Job Title']]: jobTitle,
    [labelsToIds['Phone']]: phone,
    [labelsToIds['Email']]: email,
    [labelsToIds['LinkedIn']]: linkedIn,
    [labelsToIds['Website']]: website,
    [labelsToIds['Summary']]: summary,
  } = formValues;

  // Grouped fields
  const CVHeaderFields = { userPhoto, name, surname, jobTitle };
  const CVPersonalInfoFields = { phone, email, linkedIn, website };

  // Check if any data is entered in the left column components
  const hasLeftColumnContent = Object.keys(formValues).some((key) =>
    ['personal-', 'skill-', 'qualification', 'education'].some(
      (prefix) =>
        key.startsWith(prefix) && formValues[key] && formValues[key].length > 0,
    ),
  );

  return (
    <section className="print-output-section flex h-screen flex-1 flex-col shadow-2xl">
      <header>
        <CVHeader {...CVHeaderFields} />
      </header>
      <section className="flex flex-grow">
        <aside
          className={`w-1/3 pt-2 ${hasLeftColumnContent ? 'border-r' : ''}`}
        >
          <CVPersonalInfo {...CVPersonalInfoFields} />
          <CVSkill formValues={formValues} />
          <CVQualification formValues={formValues} />
          <CVEducation formValues={formValues} />
        </aside>
        <section className="w-2/3">
          {summary && <CVSummary summary={summary} />}
          <CVWorkExperience formValues={formValues} />
        </section>
      </section>
    </section>
  );
}

OutputSection.propTypes = {
  formValues: PropTypes.object.isRequired,
  labelsToIds: PropTypes.object.isRequired,
};

export default OutputSection;
