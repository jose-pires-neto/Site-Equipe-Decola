import { styled } from "../../styles/index";

export const HeaderStyle = styled("header", {
  backgroundColor: "$brandBlue300",
  display: "flex",
  justifyContent: "center",

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4.5rem",
    padding: "0 2rem",
    width: "90%",
  },
});

export const Navbar = styled("nav", {
  display: "flex",
  listStyleType: "none",
  gap: "0 2rem",
  color: "$brandBlue800",

  "@tablet": {
    display: "none",
  },
});

export const Button = styled("button", {
  backgroundColor: "transparent",
  border: "1px solid $brandBlue800",
  borderRadius: "40px",
  cursor: "pointer",
  color: "$brandBlue800",
  padding: "0.625rem 1.5rem",

  "@tablet": {
    display: "none",
  },
});
