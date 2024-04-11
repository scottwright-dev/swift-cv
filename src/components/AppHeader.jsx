import PropTypes from 'prop-types';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import logo from '../assets/swiftcv-logo-white.svg';

function Header({ onPrint, onErase }) {
  return (
    <header className="hidden rounded-xl bg-blue-900 px-8 py-4 shadow-lg md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h1>
          <a href="/">
            <img src={logo} alt="Swift CV" className="h-auto w-24" />
          </a>
        </h1>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        <div>
          <ButtonSecondary
            className="text-white hover:bg-red-700 hover:text-white hover:outline-red-700"
            text="Erase CV"
            onClick={onErase}
          />
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
