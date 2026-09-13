import footerLogo from "../assets/footerlogo.png";

export default function Footer() {
  return (
    <footer className="bg-white mt-32 border-t border-gray-200  font-jakarta">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="">
              <img
                className="w-full max-w-34 mx-auto md:mx-0"
                src={footerLogo}
                alt="Footer logo"
              />
            </div>

            <p className="mt-4 max-w-auto md:max-w-xs text-gray-500 text-center md:text-start">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <ul className="mt-8 flex justify-center md:justify-start gap-6 text-sm font-medium">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 "
                >
                  <span className="sr-only">Github</span>
                  Github
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 "
                >
                  <span className="sr-only">Twitter</span>
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 "
                >
                  <span className="sr-only">LinkedIn</span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium text-gray-900 text-sm">PRODUCT</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Technologies
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-sm text-gray-900 ">
                COMPANY
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 text-sm">LEGAL</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 "
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 ">
            &copy; {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#">Privacy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
