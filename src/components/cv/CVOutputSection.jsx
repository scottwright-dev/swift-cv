import PropTypes from 'prop-types';
import CVHeader from './CVHeader';
import CVPersonalInfo from './CVPersonalInfo';
import CVSummary from './CVSummary';
import CVSkill from './CVSkill';

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
    [labelsToIds['Skill']]: initialSkill,
    ...otherFormValues
  } = formValues;

  // Grouped fields
  const CVHeaderFields = { userPhoto, name, surname, jobTitle };
  const CVPersonalInfoFields = { phone, email, linkedIn, website };
  const CVSummaryField = { summary };

  // Filter and map skills
  const dynamicSkills = Object.entries(otherFormValues)
    .filter(([key]) => key.startsWith('skill-'))
    .map(([, value]) => value);

  const skills = initialSkill
    ? [initialSkill, ...dynamicSkills]
    : dynamicSkills;

  return (
    <section className="flex flex-1 flex-col shadow-2xl">
      <header>
        <CVHeader {...CVHeaderFields} />
      </header>
      <section className="flex flex-grow">
        <aside className="w-1/3 border-r pt-2">
          {<CVPersonalInfo {...CVPersonalInfoFields} />}
          {skills.length > 0 && <CVSkill skills={skills} />}
        </aside>
        <section className="w-2/3">
          {summary && <CVSummary {...CVSummaryField} />}
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
