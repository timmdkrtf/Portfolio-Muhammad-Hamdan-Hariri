import BG from "../assets/Group 235.png";
import layerImg from "../assets/Group 252.png";
import TextType from "../components/TextType";
import Element1 from "../assets/Group 271.svg";
import Element2 from "../assets/Group 272.svg";
import Element3 from "../assets/Group 273.svg";
import IconLinkedIn from "../assets/LinkedIn.svg";

import CountUp from "../components/CountUp";

export default function PersonalInfo() {
  return (
    <div className="personal-info bg-[#16151D] w-full h-auto relative overflow-hidden" id="personal-info">
      <div className="bg absolute top-0 left-0 z-0">
        <img src={BG} className="object-contain w-screen" alt="" />
      </div>
      <div className="container px-5 lg:px-16 pt-36 lg:pt-48 pb-20 mx-auto w-full z-1 relative">
        <div className="row w-full sm:w-[70%] md:w-[100%] lg:w-[90%] xl:w-[80%] h-auto mx-auto">
          <div className="content flex flex-col md:flex-row gap-[30px] h-auto md:h-[550px]">
            <div className="left flex flex-col w-full md:w-[40%] gap-[30px]">
              <div className="img-personal relative w-full h-auto md:h-[65%] cursor-target">
                <img
                  className="hamdanFoto h-full w-full mx-auto object-cover relative z-3"
                  src={layerImg}
                  alt="foto-hamdan"
                />
              </div>
              <div className="experience h-[200px] md:h-[30%] w-full flex-column justify-center relative cursor-target">
                <div className="border-5 border-[#BFC0D1CC] h-[90%] px-4 overflow-hidden">
                  <div className="title">
                    <h4
                      className="orbitron-font text-white font-semibold text-xl bg-[#1c1a22] py-1 px-5 w-fit mt-[-22px] ml-[-5px] absolute"
                      style={{
                        clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)",
                      }}
                    >
                      Experience
                    </h4>
                  </div>
                  <div className="content mt-6 flex flex-col gap-5">
                    <div className="card flex bg-[#31323E] p-3 items-start relative">
                      <div className="element-point w-2 h-2 bg-[#BFC0D1] border-2 border-[#31323E] ring-2 ring-[#BFC0D1] absolute top-[-4px] left-[-3px]"></div>
                      <div className="left w-[70%]">
                        <h5 className="text-white orbitron-font md:text-xs lg:text-sm font-medium mb-1">
                          PT Abdi Media Kreatif
                        </h5>
                        <p className="text-white opacity-[90%] source3-font text-[10px] font-light tracking-wide">
                          Full-Stack Web Developer
                        </p>
                      </div>
                      <div className="right w-[30%] ">
                        <p className="text-[#BFC0D1] text-end source3-font text-[10px] font-normal py-1 tracking-normal">
                          Aug 2024 - Aug 2025
                        </p>
                      </div>
                    </div>
                    <div className="card flex bg-[#31323E] p-3 items-start relative">
                      <div className="element-point w-2 h-2 bg-[#BFC0D1] border-2 border-[#31323E] ring-2 ring-[#BFC0D1] absolute top-[-4px] left-[-3px]"></div>
                      <div className="left w-[70%]">
                        <h5 className="text-white orbitron-font text-sm font-medium mb-1">
                          CV KSN
                        </h5>
                        <p className="text-white opacity-[90%] source3-font text-[10px] font-light tracking-wide">
                          Front-end Web Developer
                        </p>
                      </div>
                      <div className="right w-[30%] ">
                        <p className="text-[#BFC0D1] text-end source3-font text-[10px] font-normal py-1 tracking-normal">
                          Jan 2023 - Jul 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gradien absolute border-s-5 border-e-5 border-b-5 border-[#BFC0D1CC] w-full h-15 bottom-[17px] bg-linear-to-t from-[#1E1E26] to-transparent"></div>
                <button className=" h-[10%] text-[#BFC0D1] text-[11px] w-full font-medium source3-font opacity-[85%]">
                  See Detail
                </button>
              </div>
            </div>
            <div className="right flex flex-col w-full md:w-[60%] gap-[30px] relative">
              <div className="h-[1%] hidden md:block"></div>
              <div className="card px-4 xs:px-6 py-4 md:py-0 h-auto md:h-[20%] bg-[#BFC0D126] flex flex-col justify-center relative cursor-target">
                <h3 className="orbitron-font text-base xs:text-[20px] xl:text-[28px] lg:text-[24px] md:text-[20px] font-bold text-white">
                  Muhammad Hamdan Hariri
                </h3>
                <TextType
                  text={[
                    "Full Stack Developer",
                    "SEO Front-end Web",
                    "UI/UX Designer",
                  ]}
                  textColors={["#BFC0D1"]}
                  className="source3-font text-white text-white xl:text-xl lg:text-[16px]"
                  typingSpeed={75}
                  pauseDuration={4000}
                  showCursor={true}
                  cursorCharacter="_"
                />
              </div>
              <div className="flex-info flex h-[120px] xs:h-[140px] md:h-[30%] gap-[20px] xs:gap-[30px]">
                <div
                  className="count-project flex justify-center items-center w-[45%] xs:w-[55%] md:h-full bg-[#31323E] relative cursor-target"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%)",
                  }}
                >
                  <img
                    className="abs-element absolute w-16 object-contain hidden xs:block top-7 left-4"
                    src={Element1}
                    alt="arrow-back end"
                  />
                  <img
                    className="abs-element absolute w-16 object-contain hidden xs:block bottom-11 right-2"
                    src={Element2}
                    alt="arrow-front end"
                  />
                  <img
                    className="abs-element absolute w-12 object-contain hidden xs:block bottom-6 left-5"
                    src={Element3}
                    alt="arrow design"
                  />
                  <div className="text-white text-center orbitron-font mt-[-10px]">
                    <CountUp
                      from={0}
                      to={21}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text text-[50px] font-bold h-14 mb-2 mt-[-10px]"
                    />
                    <p className="opacity-85 font-medium text-[13px]">
                      Project
                    </p>
                  </div>
                </div>
                <div className="sosmed w-[55%] xs:w-[45%] h-full border-5 border-[#BFC0D1CC] relative cursor-target">
                  <div className="content flex flex-col py-2 px-4 h-full relative z-2">
                    <div className="title h-[25%]">
                      <h6 className="orbitron-font font-semibold text-white text-center text-sm xs:text-base mt-1">
                        Social Media
                      </h6>
                    </div>
                    <div className="icon-link w-full h-[75%] flex justify-center items-center">
                      <a href="https://www.linkedin.com/in/muhammadhamdanhariri/" target="_blank">
                        <img src={IconLinkedIn} alt="" className="w-12 xs:w-14" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill-list h-[45%] w-full relative cursor-target">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute"
                >
                  <polygon
                    points="0 0, 100 0, 100 75, 85 100, 0 100"
                    fill="transparent"
                    stroke="#BFC0D1CC"
                    strokeWidth="10"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <div className="title">
                  <h4
                    className="orbitron-font text-white font-semibold text-xl bg-[#1c1a22] py-1 px-5 w-fit mt-[-16px] ml-[15px] absolute"
                    style={{
                      clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)",
                    }}
                  >
                    Skill & Tools
                  </h4>
                </div>
                <div className="content px-12 xs:pl-12 xs:pr-5 lg:px-12 py-9 flex flex-col gap-2 xs:flex-row xs:gap-0">
                  <div className="left w-full xs:w-[50%] text-white orbitron-font text-[15px]">
                    <ul
                      className="space-y-1"
                      style={{ listStyleType: "square" }}
                    >
                      <li>HTML CSS JS</li>
                      <li>PHP</li>
                      <li>MYSQL</li>
                      <li>React JS</li>
                      <li>Laravel</li>
                      <li>Wordpress</li>
                    </ul>
                  </div>
                  <div className="right w-full xs:w-[50%] text-white orbitron-font text-[15px]">
                    <ul
                      className="space-y-1"
                      style={{ listStyleType: "square" }}
                    >
                      <li>React Native</li>
                      <li>Github</li>
                      <li>Boostrap & Tailwind</li>
                      <li>UI / UX</li>
                      <li>Figma</li>
                      <li>Node Js</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
