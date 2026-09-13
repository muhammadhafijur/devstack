import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="font-inter bg-white">
      <div className="max-w-7xl mx-auto py-16 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h1 className="text-[30px] sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight text-center md:text-start text-gray-950">
              Build Your Ideal
              <br />
              <span className="text-transparent bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text">
                Development Stack
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-[#4B5563] text-center md:text-start">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="mt-6 flex justify-center md:justify-start items-center gap-2 font-inter">
              <a
                href="#technologies"
                className="rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899] px-2 py-2.5 text-[9px] sm:text-sm text-center font-medium text-white hover:bg-orange-600 w-full sm:max-w-[168px]"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="rounded-md border border-gray-200 px-4 py-2.5 text-[9px] sm:text-sm text-center font-medium text-gray-600 hover:bg-gray-50 w-full sm:max-w-[168px]"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="w-64 md:w-80">
            <img src={hero} alt="Development stack" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
