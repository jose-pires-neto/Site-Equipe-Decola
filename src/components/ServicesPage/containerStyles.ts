import { styled } from "../../styles";

export const ServiceSection = styled("main", {
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

  "@largeMobile": {
    padding: "0",
  },

  "@mobile": {
    padding: "0",
    p: {
      fontSize: "1.2rem",
    },
  },
});

export const ServiceContainer = styled("div", {
  maxWidth: "60rem",
  margin: "auto",
  h2: {
    paddingBottom: "1rem",
    fontSize: "1.5rem",
    fontFamily: "orbitron",
  },
  img: {
    maxWidth: "26rem",
    maxHeight: "20rem",
  },

  "@tablet": {
    img: {
      maxWidth: "28rem",
      maxHeight: "26rem",
    },
  },

  "@largeMobile": {
    maxWidth: "22rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    h1: {
      fontSize: "2rem",
      paddingTop: "1rem",
    },
    img: {
      maxWidth: "22rem",
      maxHeight: "16rem",
    },
  },

  "@mobile": {
    maxWidth: "18rem",
    isplay: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    img: {
      maxWidth: "18rem",
      maxHeight: "12rem",
    },
  },
});

export const TextAndImageContainer = styled("section", {
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
      padding: "2rem 0 1rem 0",
    },
  },

  "@largeMobile": {
    img: {
      maxWidth: "22rem",
      maxHeight: "14rem",
    },
  },

  "@mobile": {
    img: {
      width: "18rem",
      height: "14rem",
    },
  },
});

export const ContentContainer = styled("div", {
  p: {
    padding: "1rem 0",
  },
  marginBottom: "2rem",

  "@mobile": {
    maxWidth: "30rem",
  },
});

export const IconsContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  // border: "1px solid black",
  div: {
    display: "flex",
    maxWidth: "12rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.3rem",

    h3: {
      fontFamily: "orbitron",
      color: "$brandBlue800",
      fontSize: "1.4rem",
      textAlign: "center",
    },
    padding: "0.5rem",
  },

  img: {
    maxWidth: "8rem",
  },

  "@tablet": {
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.6rem 3.4rem",

    div: {
      maxWidth: "6rem",

      img: {
        maxWidth: "6rem",
      },
    },
  },

  "@largeMobile": {
    div: {
      width: "8rem",

      h3: {
        fontSize: "1.2rem",
      },

      img: {
        maxWidth: "5.5rem",
      },
    },
  },

  "@mobile": {
    justifyContent: "space-between",
    gap: "0",
    div: {
      width: "6.8rem",

      h3: {
        fontSize: "1rem",
      },

      img: {
        width: "4.6rem",
      },
    },
  },
});
