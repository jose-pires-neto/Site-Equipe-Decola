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
    marginTop: "13rem",
    textAlign: "center",
    width: "40rem",
    fontFamily: "Orbitron",
  },
});

export const ServicesField = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "80rem",
  gap: "1em",
  marginTop: "3rem",
  marginBottom: "10rem",
});

export const ServicesCard = styled("header", {
  width: "18rem",
  height: "40%",
  border: "1px solid $brandBlue400",
  borderRadius: "0.375rem",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  margin: "0.5rem",
  backgroundColor: "$white",
  h3: {
    marginBottom: "1rem",
    fontSize: "1.125rem",
    fontFamily: "Orbitron",
  },
  p: {
    textAlign: "left",
    fontSize: "1.2rem",
  },
  img: {
    alignItems: "left",
    marginBottom: "0.5rem",
    paddingBottom: "0.3rem",
  },
});
