import { CallOutline, MailOutline } from "react-ionicons/lib";
import styled from "styled-components";
import linkedIn from "../assets/images/Linkedin_logo.webp";
import breakpoints from "../assets/breakpoints";

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.backgroundColorPrimary};
  color: ${(props) => props.theme.textColor};
  padding: 1rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const SocialInfos = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  p {
    display: flex;
    gap: 1rem;
    margin: 0 0.5rem;
    font-size: 1.3rem;

    span {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: ${breakpoints.laptop}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: baseline;
  }
`;

const Linkedin = styled.a`
  text-decoration: none;
  margin: none;
  color: ${(props) => props.theme.textColor};
`;

const TwoCol = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-content: center;
  @media (max-width: ${breakpoints.laptop}) {
    justify-content: baseline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <ContactTitle>Contact</ContactTitle>
      </ContactInfo>
      <SocialInfos>
        <p>
          <MailOutline
            title={"Mail"}
            height="2rem"
            width="2rem"
            color={"white"}
          />
          alexispourthie@gmail.com
        </p>
        <p>
          <CallOutline
            title={"Phone"}
            height="2rem"
            width="2rem"
            color={"white"}
          />
          06.78.29.33.26
        </p>
        <TwoCol>
          <img src={linkedIn} alt="Logo linkedIn" width="32" height="32" />
          <Linkedin
            href="https://www.linkedin.com/in/alexis-pourthié-699b7a279"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Linkedin>
        </TwoCol>
      </SocialInfos>
    </FooterContainer>
  );
};

export default Footer;
