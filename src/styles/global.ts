import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    // backgroundColor: "",
    // color: "",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    // fontFamily: "",
    fontWeight: 400,
  },
});
