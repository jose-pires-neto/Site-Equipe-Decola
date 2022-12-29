import { styled } from "../../styles/index";

export const HeaderStyle = styled("header", {
  variants: {
    color: {
      BrandBlue: {
        backgroundColor: "$brandBlue800",
        display: "flex",
        justifyContent: "center",

        a: {
          textDecoration: "none",
          color: "$white",
          ":hover": {
            textDecoration: "underline",
          },
        },

        position: "fixed",
        width: "100vw",
        zIndex: "99",
        padding: "0.4rem 0",

        li: {
          color: "$white",
        },
        button: {
          color: "$white",
        },
        img: {
          color: "$white",
        },
      },
      Blue: {
        backgroundColor: "$brandBlue300",
        display: "flex",
        justifyContent: "center",

        a: {
          textDecoration: "none",
          color: "inherit",
          ":hover": {
            textDecoration: "underline",
          },
        },

        position: "fixed",
        width: "100vw",
        zIndex: "99",
        padding: "0.4rem 0",
      },
    },
  },
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
        textAlign: "center",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem 0",

        height: "70vh",
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

  variants: {
    color: {
      BrandBlue: {
        borderColor: "$brandBlue800",
      },
      White: {
        borderColor: "$white",
      },
    },
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

        img: {
          padding: "0.4rem 2rem",
        },
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

export const ButtonMenu = styled("button", {
  borderRadius: "40px",
  border: "none",
  cursor: "pointer",
  color: "$brandBlue800",
  padding: "1rem 2rem",
});

export const Footer = styled("footer", {
  display: "flex",
  justifyContent: "center",
});
