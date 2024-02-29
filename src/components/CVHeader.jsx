import PropTypes from 'prop-types';

function CVHeader({ userPhoto }) {
  return (
    <div className=" bg-slate-300 p-2">
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
};

export default CVHeader;
