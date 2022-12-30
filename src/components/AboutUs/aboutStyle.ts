import { styled } from "../../styles/index";

export const AboutSection = styled("section", {
  display: "flex",
  backgroundColor: "$brandBlue300",
  justifyContent: "center",
  padding: "1rem",

  img: {
    borderRadius: "10px",
    padding: "4rem 1rem",
    width: "60rem",
  },

  "@laptop": {
    img: {
      width: "28rem",
    },
  },

  "@laptopTab": {
    img: {
      width: "24rem",
    },
  },

  "@tablet": {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    img: {
      padding: "1rem 0",
      width: "20rem",
      height: "auto",
    },
  },
});

export const AboutContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",

  maxWidth: "55rem",
  padding: "1rem",

  span: {
    color: "$brandBlue800",
    fontSize: "0.90rem",
    fontWeight: "bold",
    paddingBlock: "1rem",
  },

  h2: {
    fontSize: "2.6rem",
    textAlign: "left",
    maxWidth: "55rem",
    fontFamily: "Orbitron",
    marginBottom: "1.7rem",
  },
  p: {
    fontSize: "1.5rem",
    marginBottom: "1.2rem",
    textAlign: "justify",
    maxWidth: "44rem",
  },

  "@laptopTab": {
    h2: {
      fontSize: "2rem",
    },

    p: {
      fontSize: "1.2rem",
    },
  },
});
