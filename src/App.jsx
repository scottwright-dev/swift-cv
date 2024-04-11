import { useState } from 'react';
import { FadeIn } from './components/Animations';
import SectionContainer from './components/SectionContainer';
import AppFooter from './components/AppFooter';
import LandingPage from './LandingPage';

function App() {
  const [isLandingPage, setIsLandingPage] = useState(true);

  return (
    <div
      className={
        isLandingPage ? '' : 'mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8'
      }
    >
      {isLandingPage ? (
        <LandingPage setIsLandingPage={setIsLandingPage} />
      ) : (
        <>
          <FadeIn>
            <SectionContainer />
            <AppFooter />
          </FadeIn>
        </>
      )}
    </div>
  );
}

export default App;
