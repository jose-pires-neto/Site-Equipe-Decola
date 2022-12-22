import { styled } from "../../styles/index";

export const ServicesSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$brandBlue200",
  justifyContent: "center",
  alignItems: "center",
  padding: "2.5rem",
  h2: {
    fontSize: "3rem",
    paddingTop: "13rem",
    textAlign: "center",
    maxWidth: "40rem",
    fontFamily: "Orbitron",
  },

  "@tablet": {
    h2: {
      maxWidth: "33rem",
      fontSize: "2.5rem",
    },
  },

  "@mobile": {
    h2: {
      fontSize: "2rem",
    },
  },
});

export const ServicesField = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "90vw",
  gap: "2.5rem 2rem",
  marginTop: "3rem",
  marginBottom: "10rem",
});

export const ServicesCard = styled("header", {
  width: "22rem",
  height: "13rem",
  border: "1px solid $brandBlue400",
  borderRadius: "0.375rem",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  backgroundColor: "$white",
  h3: {
    marginBottom: "1rem",
    fontSize: "1.3rem",
    fontFamily: "Orbitron",
  },
  p: {
    textAlign: "left",
    fontSize: "1.1rem",
  },
  img: {
    alignItems: "left",
    marginBottom: "0.5rem",
    paddingBottom: "0.3rem",
  },

  "@mobile": {
    width: "16rem",
    h3: {
      fontSize: "1rem",
    },
    p: {
      fontSize: "1rem",
    },
  },
});
