import { styled } from "../../styles/index";

export const AboutSection = styled("section", {
  display: "flex",
  backgroundColor: "$brandBlue300",
  justifyContent: "center",
  padding: "1rem",
  img: {
    borderRadius: "10px",
    marginTop: "4rem",
    marginBottom: "4rem",
    width: "60rem",
  },
});

export const AboutContent = styled("div", {
  width: "90rem",
  marginLeft: "5rem",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  padding: "1rem",
  marginTop: "4rem",
  marginBottom: "4rem",
  h2: {
    fontSize: "2.6rem",
    textAlign: "left",
    width: "55rem",
    justifyContent: "left",
    fontFamily: "Orbitron",
    marginBottom: "1.7rem",
  },
  p: {
    fontSize: "1.5rem",
    marginBottom: "1.2rem",
    textAlign: "justify",
    width: "50rem",
  },
});
