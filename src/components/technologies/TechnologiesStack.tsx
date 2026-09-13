import { useState } from "react";
import { toast } from "react-toastify";
import type { Itechnology } from "../../types/technologyType";
import TechnologiesCard from "./TechnologiesCard";

type Props = {
  technologies: Itechnology[];
};

const TechnologiesStack = ({ technologies }: Props) => {
  const [selectedStack, setSelectedStack] = useState<Itechnology[]>([]);

  const handleAddStack = (tech: Itechnology) => {

    const exists = selectedStack.some((t) => t.id === tech.id);

    if (exists) {
      toast.warning(`${tech.name} Already added to stack`);
      return;
    }

    setSelectedStack([...selectedStack, tech]);

    toast.success(`${tech.name} Added to stack`);
  };

  const handleRemoveStack = (id: number) => {
    const removeItem = selectedStack.find((t) => t.id === id);
    setSelectedStack((prev) => prev.filter((t) => t.id !== id));

    if (removeItem) {
      toast.info(`${removeItem.name} removed from stack`);
    }
  };

  const removeAllStack = () => {
    setSelectedStack([]);
    toast.info("All stack items removed");
  };

  return (
    <div className="mt-10 flex flex-col md:flex-row items-start gap-6">
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {technologies.map((technology: Itechnology) => {
          return (
            <TechnologiesCard
              key={technology.id}
              technology={technology}
              setSelectedStack={handleAddStack}
              selectedStack={selectedStack}
            ></TechnologiesCard>
          );
        })}
      </div>

      <div className="w-full md:w-1/4 shrink-0 flex flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-[0_2px_10px_rgba(27,35,55,.035)]">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#0F172A]">Your Stack</h3>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#ed3f91]"
          >
            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
          </svg>
        </div>

        {selectedStack.length > 0 ? (
          <p className="mt-1 text-sm text-[#94A3B8]">
            <span className="font-bold text-gray-700">
              {selectedStack.length}
            </span>{" "}
            technology selected
          </p>
        ) : (
          <p className="mt-1 text-sm text-[#94A3B8]">No
            technology selected</p>
        )}

        {selectedStack.length > 0 ? (
          <div className="mt-4 space-y-3">
            {selectedStack.map((technology) => (
              <div
                key={technology.id}
                className="rounded-lg border border-slate-200 p-3 flex items-center gap-4"
              >
                <img className="size-8" src={technology.icon} alt="" />
                <div className="">
                  <h2 className="text-xs font-semibold text-slate-800">
                    {technology.name}
                  </h2>

                  <p className="text-[10px] text-slate-500 mt-1">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => handleRemoveStack(technology.id)}
                  className="font-semibold text-gray-500 hover:text-red-500 hover:underline ml-auto "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="mt-4 rounded-lg border border-dashed border-slate-200 px-3 py-5 text-center text-sm leading-4 text-slate-400">
              Your stack is empty.
            </div>
          </>
        )}


        {
          selectedStack.length > 0 ? <button onClick={removeAllStack} className="mt-12 px-4 py-3 rounded-md flex items-center justify-center gap-1 border border-red-300 bg-red-50 text-sm  font-bold text-red-600">
          Remove All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button> : ""
        }
      </div>
    </div>
  );
};

export default TechnologiesStack;
