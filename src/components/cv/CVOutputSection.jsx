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

  return (
    <section className="print-output-section flex flex-1 flex-col pt-4 shadow-2xl">
      <header>
        <CVHeader {...CVHeaderFields} />
      </header>
      <section className="flex flex-grow">
        <aside className="w-1/3 border-r pt-2">
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
