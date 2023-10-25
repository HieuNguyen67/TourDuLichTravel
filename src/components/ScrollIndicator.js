import React, { useState, Fragment } from "react";
import { Container, ProgressBar, ScrollContent, Heading } from "./Styles";
const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);

  return (
    <>
      <Container>
        <ProgressBar style={{ width: `${scroll}%` }}></ProgressBar>
      </Container>
    </>
  );
};

export default ScrollIndicator;
