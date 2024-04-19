import PropTypes from 'prop-types';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import logo from '../assets/swiftcv-logo-white.svg';

function AppHeader({
  onPrint,
  onErase,
  onEdit,
  onPreview,
  isMobile,
  activeScreen,
}) {
  console.log('isMobile:', isMobile);
  console.log('activeScreen:', activeScreen);

  const isInputSection =
    activeScreen === 'inputsection' || activeScreen === undefined;
  console.log('isInputSection:', isInputSection);

  return (
    <header className="flex items-center justify-between rounded-xl bg-blue-900 px-8 py-4 shadow-lg md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h1>
          <a href="/">
            <img src={logo} alt="Swift CV" className="h-auto w-24" />
          </a>
        </h1>
      </div>
      <div className="flex items-center">
        {isMobile ? (
          isInputSection ? (
            <div className="flex space-x-4">
              <ButtonSecondary
                className="text-white hover:bg-red-700 hover:text-white hover:outline-red-700"
                text="Erase CV"
                onClick={onErase}
              />
              <ButtonPrimary text="Preview" onClick={onPreview} />
            </div>
          ) : (
            <div className="flex space-x-4">
              <ButtonSecondary
                className="text-white hover:bg-blue-700 hover:text-white hover:outline-blue-700"
                text="Edit CV"
                onClick={onEdit}
              />
              <ButtonPrimary text="Save PDF" onClick={onPrint} />
            </div>
          )
        ) : (
          <>
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
          </>
        )}
      </div>
    </header>
  );
}
AppHeader.propTypes = {
  onPrint: PropTypes.func.isRequired,
  onErase: PropTypes.func.isRequired,
  onEdit: PropTypes.func,
  onPreview: PropTypes.func,
  isMobile: PropTypes.bool,
  activeScreen: PropTypes.string,
};

export default AppHeader;
