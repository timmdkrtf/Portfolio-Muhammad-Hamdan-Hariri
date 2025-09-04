import ButtonSlice from "../components/ButtonSlice";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navigation w-full fixed z-10 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-[#16151D]/70 backdrop-blur-xs" : "bg-transparent"
      }`}
    >
      <div className="w-[97%] sm:w-[90%] mx-auto">
        <div className="container px-3 py-4 border-b-4 border-[#BFC0D14D] mx-auto">
          <div className="flex justify-between ">
            <div className="w-fit flex">
              <p className="orbitron-font text-white font-extrabold text-[26px] tracking-wide ">
                Portfolio
              </p>
            </div>
            <div class="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                class="text-gray-700 focus:outline-none "
                aria-label="Toggle menu"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div class="hidden md:flex gap-[40px] items-center cursor-target">
              <a
                href="#home"
                class="text-[18px] mt-1 font-normal source3-font text-white"
              >
                Home
              </a>
              <a
                href="#personal-info"
                class="text-[18px] mt-1 font-normal source3-font text-white"
              >
                Personal Info
              </a>
              <a
                href="#project"
                class="text-[18px] mt-1 font-normal source3-font text-white"
              >
                Project
              </a>
            </div>
            <div className="btn-contact tracking-wide cursor-target hidden md:block">
              <a href="https://wa.me/083811012385" target="_blank">
                <ButtonSlice text="Contact" />
              </a>
            </div>
          </div>
          {/* Menu Mobile */}
          {isOpen && (
            <div className="flex flex-col mt-4 md:hidden gap-4 transition">
              <a
                href="#home"
                className="text-[18px] font-normal source3-font text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#personal-info"
                className="text-[18px] font-normal source3-font text-white"
                onClick={() => setIsOpen(false)}
              >
                Personal Info
              </a>
              <a
                href="#project"
                className="text-[18px] font-normal source3-font text-white"
                onClick={() => setIsOpen(false)}
              >
                Project
              </a>
              <a
                href="https://wa.me/083811012385"
                target="_blank"
                className="w-fit"
                onClick={() => setIsOpen(false)}
              >
                <ButtonSlice text="Contact" />
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
