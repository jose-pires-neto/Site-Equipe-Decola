import { styled } from "../../styles/index";

export const FooterContent = styled("footer", {
  display: "flex",
  backgroundColor: "$brandBlue800",
  color: "white",
  height: "12rem",
  alignItems: "center",
  padding: "1rem 5rem",
  justifyContent: "space-between",
  p: {
    padding: "0.4rem 0",
  },

  "@mobile": {
    flexDirection: "column",
    height: "16rem",
    alignItems: "flex-start",
    padding: "1rem",
  },
});

export const LogoAndCopyright = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  padding: "0.3rem",
  img: {
    width: "11rem",
    height: "5rem",
  },
});

export const SocialMediaAndCNPJ = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "0.8rem",
  div: {
    display: "flex",
    padding: "0 0.8rem",
    justifyContent: "space-between",
    width: "100%",
  },
});
