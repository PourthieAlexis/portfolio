import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAnimatedText = styled.div`
  height: 3rem;
  overflow: hidden;
  margin: 0;
  letter-spacing: 2px;
  white-space: nowrap;
`;

const AnimatedText = ({ children }) => {
  const words = React.Children.toArray(children);

  const [text, setText] = useState(words[0]);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [i, setI] = useState(0);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 100;

  useEffect(() => {
    const wordFlick = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prev) => prev + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1 >= words.length ? 0 : prevI + 1));
          setOffset(0);
        }
      }

      const part = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }

      setText(part);
    }, speed);

    return () => clearInterval(wordFlick);
  }, [offset, forwards, i, skipCount, speed, words]);

  return <StyledAnimatedText>{text}</StyledAnimatedText>;
};

AnimatedText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AnimatedText;
