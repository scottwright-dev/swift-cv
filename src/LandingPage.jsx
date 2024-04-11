import PropTypes from 'prop-types';
import { FadeIn, SlideIn } from './components/Animations';
import logo from './assets/swiftcv-logo-white.svg';
import preview from './assets/preview.png';

export default function LandingPage({ setIsLandingPage }) {
  return (
    <FadeIn>
      <div className="bg-blue-900">
        <main>
          <div className="relative isolate overflow-hidden">
            <div
              className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
              aria-hidden="true"
            >
              <div
                className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#bfddf5] to-[#444447] opacity-20"
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
              <FadeIn className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pr-10">
                <img
                  className="h-16 w-auto lg:h-20 xl:h-24"
                  src={logo}
                  alt="Swift CV logo"
                />
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Professional. Fast. Free.
                </h1>
                <p className="mt-6 text-lg leading-8 text-blue-200">
                  Swift CV is your go-to, one-stop solution for creating
                  professional resumes quickly and effortlessly.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLandingPage(false);
                    }}
                    className="mb-10 rounded-md bg-yellow-400 px-3.5 py-2.5 text-lg font-semibold text-blue-900 shadow-sm hover:bg-yellow-300 hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get started
                  </a>
                </div>
              </FadeIn>
              <SlideIn>
                <img
                  src={preview}
                  alt="App screenshot"
                  className="w-[52rem] rounded-md bg-white/5 object-contain shadow-2xl ring-1 ring-white/10"
                />
              </SlideIn>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer aria-labelledby="footer-heading" className="relative">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
            <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                {[
                  {
                    name: 'GitHub Repository',
                    href: 'https://github.com/scottwright-dev/swift-cv',
                    icon: (props) => (
                      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.602-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.088 2.91.833.091-.646.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.645 0 0 .84-.27 2.75 1.02A9.564 9.564 0 0112 7.07c.85.004 1.705.115 2.504.337 1.909-1.29 2.747-1.02 2.747-1.02.547 1.375.203 2.392.1 2.645.64.698 1.028 1.59 1.028 2.682 0 3.841-2.337 4.687-4.565 4.936.359.31.678.92.678 1.852 0 1.335-.012 2.415-.012 2.741 0 .267.18.577.688.479C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-blue-200 hover:text-yellow-400"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-8 text-xs leading-5 text-blue-300 md:order-1 md:mt-0">
                &copy; 2024 Swift CV. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </FadeIn>
  );
}

LandingPage.propTypes = {
  setIsLandingPage: PropTypes.func.isRequired,
};
