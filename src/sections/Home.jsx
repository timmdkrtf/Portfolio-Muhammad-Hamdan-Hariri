import Particles from "../components/Particles";
import ButtonCrosshair from "../components/ButtonCrosshair";
import ButtonSlash from "../components/ButtonSlash";
import TextType from "../components/TextType";
import SplitText from "../components/SplitText";
import CV from "../assets/CV_Muhammad Hamdan Hariri.pdf"

import IconDocument from "../assets/Document.png";
import ElementSquareList from "../assets/Group 236 (1).png";

export default function Home() {
  return (
    <div className="home bg-[#16151D] z-9 relative w-full mx-auto h-screen" id="home">
      <div className="w-full h-full absolute z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="container px-3 mx-auto py-20 w-full h-full flex justify-center items-center">
        <div className="content flex flex-col gap-[80px] w-full sm:w-auto">
          <div className="title text-center">
            <SplitText
              aria-label="Introduction"
              text="I'm Hamdan Hariri"
              className="orbitron-font text-white text-[34px] xs:text-[42px] sm:text-[58px] font-extrabold cursor-target"
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <br/>
            <TextType
              text={[
                "Full Stack Developer",
                "SEO Front-end Web",
                "UI/UX Designer",
              ]}
              textColors={["#BFC0D1"]}
              className="source3-font text-[#BFC0D1] text-base sm:text-2xl"
              typingSpeed={75}
              pauseDuration={2500}
              showCursor={true}
              cursorCharacter="_"
            />
          </div>
          <div className="button-list flex items-center justify-between xs:justify-around">
            <ButtonCrosshair text="See More" />
            <ButtonSlash text="Unduh CV" icon={IconDocument} typeBtn="download" hrefBtn={CV} />
          </div>
        </div>
      </div>
      <div className="elemen-square-list absolute bottom-8 right-8">
        <img src={ElementSquareList} className="w-20" alt="" />
      </div>
    </div>
  );
}
