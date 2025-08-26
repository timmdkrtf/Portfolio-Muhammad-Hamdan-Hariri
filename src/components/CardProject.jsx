export default function CardProject({ title, description, imageCover, category, onClick }) {
  return (
    <a
      rel="noopener noreferrer"
      onClick={onClick}
      className="block h-full bg-[#31323E] p-[27px] overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-target"
    >
      <div className="w-full h-50 relative" style={{clipPath: "polygon(0 0, 80% 0, 100% 30%, 100% 100%, 14% 100%, 0 80%)" }}>
        <img
            src={imageCover}
            alt={title}
            className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 source3-font font-medium text-xs bg-[#31323E] px-2 py-[2px] text-[#BFC0D1]">{category}</span>
      </div>
      <div className="mt-5 flex flex-col gap-1">
        <h3 className="text-white text-lg text-xl font-bold orbitron-font">{title}</h3>
        <p className="text-[#FFFFFF] opacity-80 font-reguler text-sm/5 source3-font">{description}</p>
      </div>
    </a>
  );
}
