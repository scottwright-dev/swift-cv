import PropTypes from 'prop-types';

function CVHeader({ userPhoto, name, surname, jobTitle }) {
  const hasContent = userPhoto || name || surname || jobTitle;

  return (
    <div
      className={`flex items-center p-5 ${hasContent ? 'bg-slate-100' : ''}`}
    >
      {userPhoto && (
        <img
          className="h-24 w-24 rounded-full object-cover"
          src={userPhoto}
          alt="Profile photo"
        />
      )}
      <div className="ml-4">
        <h1 className="inline-block border-b-2 border-gray-400 pb-1 text-3xl font-normal">
          {`${name || ''} ${surname || ''}`}
        </h1>
        <h2 className="text-2xl font-thin">{`${jobTitle || ''}`}</h2>
      </div>
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
