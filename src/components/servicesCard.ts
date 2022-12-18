import { styled } from "@stitches/react";

export const ServicesSection = styled("section", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#DBEEFF",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
});

export const Services = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "80%",
});

export const ServicesCard = styled("header", {
  width: "320px",
  height: "150px",
  border: "1px solid #B9F2FF",
  borderRadius: "6px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  margin: "8px",
  backgroundColor: "#FFFFFF",
});
