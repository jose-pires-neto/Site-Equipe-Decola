import { styled } from "../../styles";

export const ContainerInfo = styled("section", {
  display: "flex",
  justifyContent: "center",

  "@tablet": {
    paddingTop: "1rem",
  },
});

export const InfoSection = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$brandBlue400",
  height: "12rem",
  width: "70vw",
  border: "solid 2px $brandBlue800",
  borderRadius: "8px",
  zIndex: 90,
  hr: {
    width: "0.1rem",
    height: "5.4rem",
    border: "none",
    backgroundColor: "$brandBlue800",
  },

  "@mobile": {
    height: "32rem",
    width: "85vw",
    left: "7.2%",
    hr: {
      display: "none",
    },
    p: {
      textAlign: "center",
    },
  },

  "@largeMobile": {
    height: "32rem",
    width: "85vw",
    left: "7.2%",
    hr: {
      display: "none",
    },
  },
});

export const InfoContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  "@mobile": {
    flexDirection: "column",
  },

  "@largeMobile": {
    flexDirection: "column",
  },
});

export const InfoCard = styled("div", {
  width: "16rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  h3: {
    fontSize: "2.5rem",
    paddingBottom: "0.3rem",
  },
  p: {
    fontSize: "1rem",
    color: "$brandBlue800",
  },

  "@mobile": {
    width: "9rem",
  },
});
