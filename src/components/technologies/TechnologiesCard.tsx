import type { Itechnology } from "../../types/technologyType";

type Props = {
  technology: Itechnology;
  setSelectedStack: (tech: Itechnology) => void;
  selectedStack: Itechnology[];
};

const TechnologiesCard = ({
  technology,
  setSelectedStack,
  selectedStack,
}: Props) => {
  const isAdded = selectedStack.some((t) => t.id === technology.id);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      
      
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-6 h-6"
          />
        </div>

        {technology.badge && (
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-600">
            {technology.badge}
          </span>
        )}
      </div>

  
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {technology.name}
      </h3>

      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
        {technology.description}
      </p>

      <div className="flex items-center gap-2 text-xs mb-5">
        <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-600">
          {technology.category}
        </span>

        <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-600">
          {technology.difficulty}
        </span>

        <div className="ml-auto flex items-center gap-1 text-gray-700 font-medium">
          <span>★</span>
          <span>{technology.rating}</span>
        </div>
      </div>


      <button
        onClick={() => setSelectedStack(technology)}
        
        className={`w-full text-sm font-medium py-2.5 rounded-lg transition ${
          isAdded
            ? "bg-gray-100 text-gray-500 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-black"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologiesCard;