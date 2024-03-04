import PropTypes from 'prop-types';

function CVHeader({ userPhoto, name, surname }) {
  return (
    <div className="flex items-center bg-slate-200 p-2">
      {userPhoto && (
        <img
          className="h-24 w-24 rounded-full object-cover"
          src={userPhoto}
          alt="Profile photo"
        />
      )}
      <div className="ml-4">
        <h1 className="border-b-2 border-gray-400 pb-1 text-3xl font-normal">{`${name || 'name'} ${surname || 'surname'}`}</h1>
      </div>
    </div>
  );
}

CVHeader.propTypes = {
  userPhoto: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
};

export default CVHeader;
