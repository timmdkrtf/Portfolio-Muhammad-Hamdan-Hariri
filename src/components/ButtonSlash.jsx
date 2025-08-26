import styled from "styled-components";

const ButtonSlash = ({ text, icon, typeBtn, hrefBtn }) => {
  return (
    <ContainerStyle>
      <a
        className="orbitron-font flex items-center gap-2 text-white cursor-target py-7 px-14 sm:py-3 sm:px-6 text-sm sm:text-xl"
        href={hrefBtn}
        {...(typeBtn === "download" ? { download: true } : {})}
      >
        <span>
          <img src={icon} alt="" />
        </span>
        {text}
      </a>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  a {
    background-color: transparent;
    font-weight: 500;
    position: relative;
    z-index: 2;
    padding: 12px 24px;
  }

  a::before {
    content: "";
    position: absolute;
    background-color: #31323e;
    width: 100%;
    height: 100%;
    z-index: -1;
    clip-path: polygon(0 0, 40% 0, 60% 100%, 0% 100%);
    left: 0;
    transition: clip-path 0.4s ease; 
  }

  a:hover::before {
    clip-path: polygon(40% 0, 100% 0, 100% 100%, 60% 100%);
    }

`;

export default ButtonSlash;
