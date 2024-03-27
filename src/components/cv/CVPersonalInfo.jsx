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
            <span className="text-lg">
              <span
                className="inline-block border-b-2 border-slate-200"
                style={{ width: '35px' }}
              >
                Contact
              </span>
            </span>
          </header>

          {phone && (
            <div className="flex items-center pb-1">
              <IconPhone size={16} stroke={1} className="mr-2.5" />
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          )}
          {email && (
            <div className="flex items-center pb-1">
              <IconMail size={16} stroke={1} className="mr-2.5" />
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          )}
          {linkedIn && (
            <div className="flex items-center pb-1">
              <IconBrandLinkedin size={16} stroke={1} className="mr-2.5" />
              {linkedIn}
            </div>
          )}
          {website && (
            <div className="flex items-center pb-1">
              <IconWorld size={16} stroke={1} className="mr-2.5" />
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
