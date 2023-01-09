import { styled } from "../../styles";

export const Carousel = styled("section", {
  overflow: "hidden",
  height: "auto",
  maxHeight: "50rem",

  "@largeMobile": {
    height: "auto",
  },
});

export const SlideContent = styled("div", {
  width: "100%",
  textAlign: "left",
  height: "auto",

  img: {
    width: "100%",
    height: "100%",
  },

  "@tablet": {
    height: "40rem",
  },

  "@largeMobile": {
    height: "36rem",

    img: {
      width: "48rem",
      height: "36rem",
    },
  },

  "@mobile": {
    img: {
      width: "40rem",
      height: "30rem",
    },
  },
});

export const SlideCaption = styled("div", {
  variants: {
    ColorText: {
      brandBlue: {
        h1: {
          color: "$brandBlue800",
        },
      },
      lightBlue: {
        h1: {
          color: "$brandBlue400",
        },
      },
      white: {
        h1: {
          color: "$white",
        },
      },
    },
  },

  position: "absolute",
  marginTop: "8rem",
  marginLeft: "6rem",

  h1: {
    fontFamily: "Orbitron",
    fontWeight: "bold",
    fontSize: "6rem",
    marginBottom: "1rem",
    maxWidth: "70rem",
  },

  h3: {
    maxWidth: "46rem",
    fontSize: "2rem",
    color: "$white",
  },

  "@laptop": {
    marginTop: "6rem",

    h1: {
      fontSize: "5.2rem",
      marginBottom: 0,
    },
  },

  "@laptopTab": {
    h1: {
      fontSize: "4.5rem",
    },
  },

  "@tablet": {
    marginTop: "8rem",
    marginLeft: "3rem",

    h1: {
      fontSize: "3.6rem",
      marginBottom: "2rem",
    },
    h3: {
      fontSize: "1.6rem",
      maxWidth: "34rem",
    },
  },

  "@largeMobile": {
    marginLeft: "0.8rem",
    h1: {
      fontSize: "2.4rem",
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "1.3rem",
      maxWidth: "23rem",
    },
  },
});
