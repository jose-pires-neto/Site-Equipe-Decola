import { styled } from "../../styles";

export const MarketingSection = styled("main", {
  marginTop: "5.3rem",
  backgroundColor: "$brandBlue200",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "3rem 5rem",
  p: {
    fontSize: "1.5rem",
    textAlign: "justify",
  },
  h1: {
    fontSize: "3rem",
    paddingBottom: "0.5rem",
    fontFamily: "orbitron",
  },
  hr: {
    border: "1px solid black",
    width: "100%",
  },
});

export const MarketingContainer = styled("div", {
  maxWidth: "60rem",
  margin: "auto",
  h2: {
    paddingBottom: "1rem",
    fontSize: "1.5rem",
    fontFamily: "orbitron",
  },
  img: {
    maxWidth: "30rem",
    maxHeight: "20rem",
  },

  "@largeMobile": {
    width: "18rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    h1: {
      fontSize: "0.8rem",
    },
  },
});

export const MarketingImageContainer = styled("section", {
  display: "flex",
  marginTop: "3rem",
  div: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0 0 3rem",
  },

  "@tablet": {
    flexDirection: "column",
    alignItems: "center",
    div: {
      padding: "2rem 0",
    },
  },

  "@largeMobile": {
    img: {
      width: "18rem",
      height: "18rem",
    },
  },

  "@mobile": {
    img: {
      width: "12rem",
      height: "12rem",
    },
  },
});

export const MarketingContent = styled("div", {
  p: {
    padding: "1rem 0",
  },
  marginBottom: "2rem",
});
