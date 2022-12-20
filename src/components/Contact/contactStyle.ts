import { styled } from "../../styles/index";

export const ContactSection = styled("section", {
  display: "flex",
  backgroundColor: "$brandBlue200",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  height: "43.6875rem",
  gap: "15rem",
  img: {
    width: "37.5625rem",
    height: "34rem",
  },
});

export const ContactContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  width: "35rem",
  height: "19rem",
  padding: "1.5rem",
  h2: {
    fontSize: "2.6rem",
    textAlign: "left",
    width: "32rem",
    justifyContent: "left",
    fontFamily: "Orbitron",
    marginBottom: "1.7rem",
  },
  button: {
    display: "flex",
    width: "18rem",
    height: "3.5rem",
    padding: "0.5rem",
    borderRadius: "40px",
    marginTop: "1.2rem",
    border: "none",
    color: "white",
    backgroundColor: "$brandBlue800",
    fontSize: "1.2rem",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    img: {
      width: "1.6rem",
      height: "1.6rem",
    },
  },
  p: {
    marginTop: "0.1rem",
    marginBottom: "0.8rem",
  },
});
