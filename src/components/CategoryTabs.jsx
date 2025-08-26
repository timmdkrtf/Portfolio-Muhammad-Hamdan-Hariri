
export default function CategoryTabs({ categories, activeIndex, onChange }) {
  return (
    <div className="flex text-white justify-center">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`px-6 py-3 text-[15px] source3-font font-semibold cursor-pointer transition-colors duration-200  border-b-3 cursor-target ${
            activeIndex === index ? "bg-[#32313A] text-white" : " hover:bg-[#31323E] text-[#FFFFFFA6]"
          }`}
          onClick={() => onChange(index)}
        >
          {category}
        </div>
      ))}
    </div>
  );
}
