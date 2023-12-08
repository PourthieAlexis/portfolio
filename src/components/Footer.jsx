import { CallOutline, MailOutline } from "react-ionicons";
import styled from "styled-components";

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

const ContactText = styled.p`
  font-size: 1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  p {
    display: flex;
    gap: 1rem;
    margin: 0 0.5rem;
    font-size: 1.5rem;

    svg {
      color: ${(props) => props.theme.textColor};
    }
    span {
      display: flex;
      align-items: center;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <ContactTitle>Me contacter</ContactTitle>
        <ContactText>
          Vous pouvez me contacter avec les réseaux socieaux suivants
        </ContactText>
      </ContactInfo>
      <SocialIcons>
        <p>
          <MailOutline title={"Mail"} height="2rem" width="2rem" />
          alexispourthie@gmail.com
        </p>

        <p>
          <CallOutline title={"Phone"} height="2rem" width="2rem" />
          06.78.29.33.26
        </p>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
