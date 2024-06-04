import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { CloseOutline } from "react-ionicons";
import breakpoints from "../assets/breakpoints";

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  justify-content: space-around;
  height: 30rem;
  border-radius: 2rem;
  padding: 3rem;
  z-index: 999;
  transform: translate(-50%, -50%) scale(1);
  display: flex;
  background-color: ${(props) => props.theme.backgroundColorPrimary};
  color: ${(props) => props.theme.textColor};

  ${(props) =>
    props.visible &&
    css`
      animation: popupAnimation 0.75s cubic-bezier(0.53, -0.08, 0.5, 1.43);
    `}

  @media (max-width: ${breakpoints.laptop}) {
    height: auto;
    flex-direction: column;
    width: fit-content;
  }

  @keyframes popupAnimation {
    from {
      transform: translate(-50%, -50%) scale(0.1);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  min-width: 15rem;
  img {
    align-self: center;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    @media (max-width: ${breakpoints.laptop}) {
      width: 20rem;
      flex-direction: row;
    }
  }

  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
    justify-content: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  h2 {
    margin-top: 0;
  }

  p {
    margin: 0;
  }
`;

const ListContainer = styled.div`
  h2 {
    margin-top: 0;
  }

  ul {
    padding: 0;
    list-style-position: inside;
    margin: 0;
  }
`;
const ButtonClose = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: transparent;
  margin: 1rem;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Popup = ({ onClose, visible, projet }) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <PopupContainer visible={visible} animation={visible}>
        <ImgContainer>
          <img src={projet.image} alt={projet.image} />
        </ImgContainer>
        <Content>
          <TextContainer>
            <h2>Description du projet</h2>
            <p>{projet.text}</p>
          </TextContainer>
          <ListContainer>
            <h2>Technologies utilisées</h2>
            <ul>
              {projet.techno &&
                projet.techno.map((techno, index) => (
                  <li key={index}>{techno}</li>
                ))}
            </ul>
          </ListContainer>
        </Content>
        <ButtonClose onClick={onClose}>
          <CloseOutline color={"#7D4E57"} height="3rem" width="3rem" />
        </ButtonClose>
      </PopupContainer>
    </>
  );
};

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  projet: PropTypes.object.isRequired,
};

export default Popup;
