import { styled } from "../../styles";

export const InfoSection = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$brandBlue400",
  height: "12rem",
  width: "70vw",
  position: "absolute",
  top: "78%",
  left: "16%",
  border: "solid 2px $brandBlue800",
  borderRadius: "8px",
  hr: {
    width: "0.1rem",
    height: "5.4rem",
    border: "none",
    backgroundColor: "$brandBlue800",
  },
});

export const InfoContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
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
});
