import { use } from "react";
import type { Itechnology } from "../../types/technologyType";
import TechnologiesStack from "./TechnologiesStack";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  console.log(technologies);

  return (
    <section className="bg-white">
      <div
        id="technologies"
        className="font-jakarta w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 bg-white"
      >
        <div className="text-center md:text-start">
          <h2 className="text-xl md:text-4xl font-bold">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-2 text-[#64748B] text-sm md:text-base ">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <TechnologiesStack technologies={technologies}></TechnologiesStack>
      </div>
    </section>
  );
};

export default Technologies;
