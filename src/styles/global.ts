import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    color: "$gray700",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    boxSizing: "border-box",
  },

  "body, input, textarea, button": {
    fontFamily: "DM Sans",
    fontWeight: 400,
  },

  "@media screen and (max-width: 480px)": {
    body: {
      overflowY: "hidden",
    },
  },
});
