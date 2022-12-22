import { styled } from "../../styles/index";

export const ContactSection = styled("section", {
  display: "flex",
  backgroundColor: "$brandBlue200",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "1rem",
  height: "43.6875rem",

  img: {
    maxWidth: "36rem",
    maxHeight: "34rem",
  },

  "@laptop": {
    padding: "1rem 4rem",

    img: {
      width: "28rem",
      height: "24rem",
    },
  },

  "@laptopTab": {
    img: {
      width: "24rem",
      height: "20rem",
    },
  },

  "@tablet": {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  "@mobile": {
    img: {
      width: "20rem",
      height: "16rem",
    },
  },
});

export const ContactContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  width: "35rem",
  height: "19rem",
  padding: "1.5rem 0",

  h2: {
    fontSize: "2.6rem",
    textAlign: "left",
    width: "32rem",
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

  div: {
    display: "flex",
    alignItems: "center",
    img: {
      width: "1.6rem",
      height: "1.6rem",
    },

    p: {
      padding: "1rem 0.6rem",
      fontSize: "1rem",
    },
  },

  "@laptopTab": {
    width: "30rem",

    h2: {
      width: "26rem",
      fontSize: "2rem",
    },
  },

  "@tablet": {
    width: "22rem",
    justifyContent: "center",
    alignItems: "center",

    h2: {
      width: "20rem",
    },
  },

  "@mobile": {
    width: "22rem",
  },
});
