import PropTypes from 'prop-types';

function CVHeader({ userPhoto, name, surname, jobTitle }) {
  const hasContent = userPhoto || name || surname || jobTitle;

  return (
    <div
      className={`flex items-center justify-between px-4 py-4 ${hasContent ? 'bg-slate-100' : ''}`}
    >
      <div>
        <h1 className="pb-1 text-3xl font-normal">{name || ''}</h1>
        <h1 className="pb-1 text-3xl font-normal">{surname || ''}</h1>
        <h2 className="text-2xl font-thin">{`${jobTitle || ''}`}</h2>
      </div>
      {userPhoto && (
        <img
          className="h-24 w-24 rounded-full object-cover"
          src={userPhoto}
          alt="Profile photo"
        />
      )}
    </div>
  );
}

CVHeader.propTypes = {
  userPhoto: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  jobTitle: PropTypes.string,
};

export default CVHeader;
