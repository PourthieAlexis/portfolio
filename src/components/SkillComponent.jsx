import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HtmlLogo from "../assets/images/HTML5_logo.webp";
import CssLogo from "../assets/images/CSS3_logo.webp";
import JsLogo from "../assets/images/JS_logo.webp";
import SymfonyLogo from "../assets/images/Symfony_logo.webp";
import LaravelLogo from "../assets/images/Laravel_logo.webp";
import ReactLogo from "../assets/images/React_logo.webp";
import JiraLogo from "../assets/images/Jira_logo.webp";
import MySQL_Logo from "../assets/images/MySQL_logo.webp";
import styled from "styled-components";
import React from "react";

const SkillContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 2rem;
`;

const SkillWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  height: 5rem;
  width: 5rem;
  max-width: 100%;
  border-radius: 1rem;
  object-fit: contain;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.textColor};
`;

const skills = [
  { id: 1, logo: HtmlLogo, name: "HTML5" },
  { id: 2, logo: CssLogo, name: "CSS3" },
  { id: 3, logo: JsLogo, name: "JavaScript" },
  { id: 4, logo: SymfonyLogo, name: "Symfony" },
  { id: 5, logo: ReactLogo, name: "React" },
  { id: 6, logo: LaravelLogo, name: "Laravel" },
  { id: 7, logo: JiraLogo, name: "Jira" },
  { id: 8, logo: MySQL_Logo, name: "MySQL" },
];

const SkillComponent = () => {
  const settings = {
    accessibility: true,
    infinite: true,
    dots: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <SkillContainer>
      <SkillWrapper>
        <Slider {...settings}>
          {skills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Skill>
                <Image src={skill.logo} alt={skill.name} />
                <p>{skill.name}</p>
              </Skill>
            </React.Fragment>
          ))}
        </Slider>
      </SkillWrapper>
    </SkillContainer>
  );
};

export default SkillComponent;
