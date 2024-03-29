import PropTypes from 'prop-types';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

function Header({ onPrint, onErase }) {
  return (
    <header className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="pl-4 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Swift CV
        </h2>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <div>
          <ButtonSecondary text="Erase CV" onClick={onErase} />
        </div>
        <div className="ml-4">
          <ButtonPrimary text="Save CV" onClick={onPrint} />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onPrint: PropTypes.func.isRequired,
  onErase: PropTypes.func.isRequired,
};

export default Header;
