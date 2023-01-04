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
    marginTop: "1rem",
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
      maxWidth: "24rem",
      maxHeight: "22rem",
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
  marginBottom: "1rem",

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
  marginBottom: "2rem",

  p: {
    padding: "1rem 0",
  },

  "@mobile": {
    maxWidth: "30rem",
  },
});

export const IconsContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",

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

export const CriacaoDeSitesContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  div: {
    width: "18rem",

    p: {
      fontSize: "1.2rem",
    },
  },

  "@laptop": {
    flexDirection: "column",

    div: {
      width: "100%",
      display: "flex",
    },
  },
});

export const StepsCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  paddingTop: "0.5rem",
});

export const CardImage = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "3.5rem",

  h3: {
    fontFamily: "orbitron",
    color: "$brandBlue800",
    fontSize: "1.4rem",
    maxWidth: "12rem",
    textAlign: "center",
  },

  div: {
    width: "4rem",

    img: {
      width: "100%",
      height: "auto",
    },
  },

  "@laptop": {
    justifyContent: "flex-start",
    height: "2rem",

    h3: {
      paddingLeft: "1rem",
      maxWidth: "100%",
    },

    div: {
      width: "2.5rem",
    },
  },

  "@mobile": {
    height: "4.2rem",

    div: {
      width: "3.2rem",
    },
  },
});

export const LandingPageContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  img: {
    paddingRight: "2rem",
    maxWidth: "14rem",
    maxHeight: "12rem",
  },

  "@tablet": {
    flexDirection: "column",

    img: {
      padding: "0.5rem 0",
      maxWidth: "10rem",
      maxHeight: "8rem",
    },
  },

  "@mobile": {
    img: {
      maxWidth: "8rem",
      maxHeight: "6rem",
    },
  },
});
