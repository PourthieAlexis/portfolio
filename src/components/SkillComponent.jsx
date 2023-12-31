import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HtmlLogo from "../assets/images/HTML5_logo.png";
import CssLogo from "../assets/images/CSS3_logo.png";
import JsLogo from "../assets/images/JS_logo.png";
import SymfonyLogo from "../assets/images/Symfony_logo.png";
import LaravelLogo from "../assets/images/Laravel_logo.png";
import ReactLogo from "../assets/images/React_logo.png";
import JiraLogo from "../assets/images/Jira_logo.png";
import MySQL_Logo from "../assets/images/MySQL_logo.png";
import styled from "styled-components";

const SkillContainer = styled.div`
  height: 10rem;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 2rem;
`;

const SkillWrapper = styled.div`
  width: 50%;
`;

const Image = styled.img`
  height: 5rem;
  width: 5rem;
  max-width: 100%;
  border-radius: 1rem;
  object-fit: contain;
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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    focusOnSelect: true,
  };

  return (
    <SkillContainer>
      <SkillWrapper>
        <Slider {...settings}>
          {skills.map((skill) => (
            <Image key={skill.id} src={skill.logo} alt={skill.name} />
          ))}
        </Slider>
      </SkillWrapper>
    </SkillContainer>
  );
};

export default SkillComponent;
