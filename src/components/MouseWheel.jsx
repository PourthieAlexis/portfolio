import styled, { keyframes } from "styled-components";

const mouseWheelAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);    
    opacity: 0;
  }
`;

const Mouse = styled.div`
  position: absolute;
  left: 50%;
  bottom: 75px;
  border: 2px solid white;
  border-radius: 0px 0px 50px 50px;
  height: 50px;
  width: 30px;
  margin-left: -15px;
  display: block;
  z-index: 10;
  opacity: 0.4;
  animation: 3s anim-lineUp ease-out;
`;

const Wheel = styled.div`
  position: relative;
  border-radius: 10px;
  background: white;
  width: 4px;
  height: 10px;
  top: 6px;
  margin-left: auto;
  margin-right: auto;
  animation: ${mouseWheelAnimation} 2s infinite;
`;

const MouseWheel = () => {
  return (
    <Mouse>
      <Wheel></Wheel>
    </Mouse>
  );
};

export default MouseWheel;
