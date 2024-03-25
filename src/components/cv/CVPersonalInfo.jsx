import PropTypes from 'prop-types';
import {
  IconPhone,
  IconMail,
  IconBrandLinkedin,
  IconWorld,
} from '@tabler/icons-react';

function CVPersonalInfo({ phone, email, linkedIn, website }) {
  const contactDetails = [phone, email, linkedIn, website];

  return (
    <section className="mb-4 ml-4 space-y-1 text-xs font-thin">
      {contactDetails.some((detail) => detail) && (
        <>
          <header className="mb-2 flex items-center text-sm font-normal">
            <span className="text-lg">Contact</span>
          </header>

          {phone && (
            <div className="ml-3 flex items-center">
              <IconPhone size={16} className="mr-2.5" />
              {phone}
            </div>
          )}
          {email && (
            <div className="ml-3 flex items-center">
              <IconMail size={16} className="mr-2.5" />
              {email}
            </div>
          )}
          {linkedIn && (
            <div className="ml-3 flex items-center">
              <IconBrandLinkedin size={16} className="mr-2.5" />
              {linkedIn}
            </div>
          )}
          {website && (
            <div className="ml-3 flex items-center">
              <IconWorld size={16} className="mr-2.5" />
              {website}
            </div>
          )}
        </>
      )}
    </section>
  );
}

CVPersonalInfo.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  linkedIn: PropTypes.string,
  website: PropTypes.string,
};

export default CVPersonalInfo;
