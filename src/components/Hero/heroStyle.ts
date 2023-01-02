import { styled } from "../../styles";

export const SlideContent = styled("div", {
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

  width: "100%",
  textAlign: "left",
  height: "56rem",
  overflow: "hidden",

  img: {
    width: "150rem",
    height: "auto",
  },

  h1: {
    marginTop: "8rem",
    fontFamily: "Orbitron",
    fontWeight: "bold",
    fontSize: "6rem",
    marginBottom: "2rem",
    position: "absolute",
    maxWidth: "70rem",
    left: 130,
  },

  h3: {
    maxWidth: "46rem",
    fontSize: "2rem",
    position: "absolute",
    top: 490,
    left: 130,
    color: "$white",
  },

  "@laptop": {
    img: {
      width: "90rem",
      height: "auto",
    },

    h1: {
      top: 100,
      fontSize: "4.4rem",
      maxWidth: "60rem",
    },
    h3: {
      top: 480,
      fontSize: "2rem",
    },
  },

  "@laptopTab": {
    h1: {
      fontSize: "4rem",
      left: 100,
    },
    h3: {
      left: 100,
      top: 460,
      fontSize: "1.8rem",
    },
  },

  "@tablet": {
    height: "40rem",

    img: {
      width: "70rem",
    },

    h1: {
      fontSize: "3rem",
    },

    h3: {
      top: 460,
      fontSize: "1.6rem",
      maxWidth: "40rem",
    },
  },

  "@largeMobile": {
    height: "26rem",

    img: {
      width: "40rem",
      height: "26rem",
    },

    h1: {
      fontSize: "1rem",
    },
    h3: {
      fontSize: "0.8rem",
    },
  },

  // // "@mobile": {
  // //   h1: {
  // //     fontSize: "1rem",
  // //   },
  // //   h3: {
  // //     fontSize: "0.8rem",
  // //   },
  // // },
});
