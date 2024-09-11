import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Accordion Component
const Accordion = ({ title, content, isOpen, toggleAccordion }: any) => {
  return (
    <div className="w-full max-w-md p-5 mx-auto mt-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div
        className="flex justify-between items-center cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-100 p-4 rounded-md"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <span
          className={`transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </span>
      </div>
      <div
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="mt-2 p-4 bg-gray-50 rounded-md shadow-inner">
          <p className="text-gray-600 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
