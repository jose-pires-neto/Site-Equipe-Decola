import { styled } from "../../styles/index";

export const HeaderStyle = styled("header", {
  display: "flex",
  backgroundColor: "$brandBlue300",
  justifyContent: "space-between",
  alignItems: "center",
  height: "4.5rem",
  padding: "0 2rem",
});

export const Navbar = styled("nav", {
  display: "flex",
  listStyleType: "none",
  gap: "0 2rem",
  color: "$brandBlue800",
});

export const Button = styled("button", {
  backgroundColor: "transparent",
  border: "1px solid $brandBlue800",
  borderRadius: "40px",
  cursor: "pointer",
  color: "$brandBlue800",
  padding: "0.625rem 1.5rem",
});
