import { MailOutline, CallOutline, PersonOutline } from "react-ionicons/lib";
import styled from "styled-components";
import linkedIn from "../assets/images/Linkedin_logo.webp";
import CV from "../assets/CV/Alexis_Pourthié_CV.pdf";
import breakpoints from "../assets/breakpoints";

const SocialMedia = styled.div`
  position: fixed;
  left: 0;
  top: 10%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 3rem);
  justify-content: center;
  align-items: center;
  z-index: 999;
  @media (max-width: ${breakpoints.laptop}) {
    display: none;
  }
`;

const Social = styled.a`
  position: relative;
  left: -14rem;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: end;
  align-items: center;
  text-decoration: none;
  animation: 1s anim-socialMedia ease-out;
  cursor: pointer;
  transition: left 1s ease;
  gap: 2rem;
  padding-right: 1rem;
  color: white;

  @keyframes anim-socialMedia {
    from {
      left: -20rem;
    }
    to {
      left: -14rem;
    }
  }

  &:hover {
    left: 0;
  }
`;

const LinkedinIcon = styled(Social)`
  background-color: #0366c3;
`;

const MailIcon = styled(Social)`
  background-color: rgb(8, 188, 8);
`;

const PhoneIcon = styled(Social)`
  background-color: grey;
`;

const ResumeIcon = styled(Social)`
  background-color: #d66853;
`;

const SocialMediaComponent = () => {
  return (
    <SocialMedia>
      <LinkedinIcon
        href="https://www.linkedin.com/in/alexis-pourthié-699b7a279"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>LinkedIn</p>
        <img src={linkedIn} alt="Logo linkedIn" width="32" height="32" />
      </LinkedinIcon>
      <MailIcon href="mailto:alexispourthie@gmail.com">
        <p>alexispourthie@gmail.com</p>
        <MailOutline
          color={"white"}
          title={"Mail"}
          height="2rem"
          width="2rem"
        />
      </MailIcon>
      <PhoneIcon href="tel:0678293326">
        <p>06.78.29.33.26</p>
        <CallOutline
          color={"white"}
          title={"Téléphone"}
          height="2rem"
          width="2rem"
        />
      </PhoneIcon>
      <ResumeIcon href={CV} target="_blank" rel="noopener noreferrer">
        <p>CV</p>
        <PersonOutline
          color={"white"}
          title={"CV"}
          height="2rem"
          width="2rem"
        />
      </ResumeIcon>
    </SocialMedia>
  );
};
export default SocialMediaComponent;
