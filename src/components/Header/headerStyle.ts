import { styled } from "../../styles/index";

export const HeaderStyle = styled("header", {
  backgroundColor: "$brandBlue300",
  display: "flex",
  justifyContent: "center",
});

export const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "4.5rem",
  padding: "0 2rem",
  width: "90%",
});

export const Navbar = styled("nav", {
  variants: {
    isHidden: {
      true: {},
      false: {
        color: "$white",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem 0",

        marginTop: "40rem",
        height: "60vh",
        width: "100%",

        zIndex: 12,

        li: {
          fontSize: "1.6rem",
          fontWeight: "bold",
        },
      },
    },
  },

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

export const Menu = styled("section", {
  variants: {
    Appearance: {
      fullScreen: {
        position: "absolute",
        top: 0,
        left: 0,

        height: "100vh",
        width: "100vw",

        backgroundColor: "$brandBlue800",
        zIndex: 10,
      },
      hidden: {},
    },
  },

  display: "none",

  "@tablet": {
    display: "block",
  },
});

export const Hamburger = styled("div", {
  "@tablet": {
    width: "30px",
    height: "30px",
    marginRight: "10px",
    position: "absolute",
    right: 48,
    top: 14,

    zIndex: 90,
  },
});
