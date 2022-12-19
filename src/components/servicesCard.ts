import { styled } from "@stitches/react";

export const ServicesSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#DBEEFF",
  justifyContent: "center",
  alignItems: "center",
  padding: "2.5rem",
  h2: {
    fontSize: "3.125rem",
    margin: "4.375rem",
  },
});

export const Services = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "80rem",
  gap: "1em",
  // border: "1px solid",
});

export const ServicesCard = styled("header", {
  width: "18rem",
  height: "40%",
  border: "1px solid #B9F2FF",
  borderRadius: "0.375rem",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  margin: "0.5rem",
  backgroundColor: "#FFFFFF",
  h3: {
    marginBottom: "1rem",
    fontSize: "1.125rem",
  },
  p: {
    textAlign: "left",
  },
});
