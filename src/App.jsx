import Header from './components/Header';
import SectionContainer from './components/SectionContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <Header />
        <SectionContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
