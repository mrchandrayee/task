import { categories } from "../data/categories";

export default function CategoryFilter({ active, onChange }) {
  const options = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={
            active === option
              ? "rounded border border-gray-800 px-3 py-1"
              : "rounded border border-gray-200 px-3 py-1 text-gray-500 hover:border-gray-400"
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}
