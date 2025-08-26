import BtnBg from "../assets/Group 258.png";
import { useState } from "react";
import BtnSee from "../assets/Group 265.png";
import CategoryTabs from "../components/CategoryTabs";
import CardProject from "../components/CardProject";
import DataProject from "../data/Project";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../components/Modal"

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [selectedId, setSelectedId] = useState(true);

  const categories = [
    "All",
    "Front-end Developer",
    "Full-stack Developer",
    "Mobile Developer",
    "UI / UX",
    "Talent",
  ];

  const activeCategory = categories[activeIndex];

  const filteredCards =
    activeCategory === "All"
      ? DataProject
      : DataProject.filter((data) => data.category === activeCategory);

  const selectedCard = filteredCards.find((c) => c.id === selectedId);

  const visibleCards = showAll ? filteredCards : filteredCards.slice(0, 6);

  return (
    <div className="project bg-[#16151D]" id="project">
      {selectedCard && (
      <Modal
        isOpen={!!selectedCard}
        onClose={() => setSelectedId(null)}
        // title={selectedCard?.title}
        // description={selectedCard?.description}
        // image={selectedCard?.imageCover}
        // category={selectedCard?.category}
        // date={selectedCard?.date}
        dataId={selectedCard}
      />
      )}
      <div className="container px-5 lg:px-16 mx-auto py-20 w-auto">
        <div className="row flex flex-col justify-center w-full ">
          <button
            className="title orbitron-font font-bold text-[26px] px-11 pt-3 pb-5 mx-auto text-white bg-contain bg-no-repeat cursor-target"
            style={{ backgroundImage: `url(${BtnBg})` }}
          >
            My Projects
          </button>
          <div className="filter py-4 mt-7">
            <div className="max-lg:overflow-x-auto max-lg:whitespace-nowrap scrollbar-hide">
              <div className="max-lg:inline-flex">
                <CategoryTabs
                  categories={categories}
                  activeIndex={activeIndex}
                  onChange={setActiveIndex}
                />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <AnimatePresence>
                {visibleCards.length > 0 ? (
                  visibleCards.map((data, i) => (
                    <motion.div
                      key={i} // lebih aman pakai data unik
                      className="w-full h-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardProject
                        title={data.title}
                        description={data.description}
                        imageCover={data.imageCover}
                        category={data.category}
                        onClick={() => setSelectedId(data.id)}
                      />
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    key="no-data"
                    className="col-span-3 flex items-center justify-center h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-gray-400 text-sl py-5">
                      Tidak ada data untuk kategori ini
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {filteredCards.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="button-more orbitron-font mt-10 w-fit bg-contain bg-no-repeat text-white px-4 pt-1 pb-4 font-medium text-xl w-fit mx-auto hover:scale-105 transition-transform cursor-target"
              style={{ backgroundImage: `url(${BtnSee})` }}
            >
              {showAll ? "See less" : "See more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
